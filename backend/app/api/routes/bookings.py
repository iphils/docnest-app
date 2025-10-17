import uuid
from datetime import date
from typing import Any

from fastapi import APIRouter, HTTPException, Query
from sqlmodel import func, select

from app.api.deps import CurrentUser, SessionDep
from app import crud
from app.models import (
    SeatBooking,
    SeatBookingCreate,
    SeatBookingPublic,
    SeatBookingsPublic,
    SeatBookingUpdate,
    Seat,
    SeatPublic,
    SeatsPublic,
    SeatAvailability,
    Message,
)

router = APIRouter(prefix="/bookings", tags=["bookings"])


# ============================================================================
# Seat Endpoints
# ============================================================================

@router.get("/seats", response_model=SeatsPublic)
def read_seats(session: SessionDep) -> Any:
    """
    Retrieve all available seats in the study room.
    Public endpoint - no authentication required.
    """
    seats = crud.get_all_seats(session=session)
    return SeatsPublic(data=seats, count=len(seats))


@router.get("/seats/availability", response_model=SeatAvailability)
def check_availability(
    session: SessionDep,
    booking_date: date = Query(..., description="Date to check availability for"),
    seat_id: int | None = Query(None, description="Optional: Check specific seat"),
) -> Any:
    """
    Check seat availability for a specific date.
    Returns total seats, available seats, and list of available seat IDs.
    """
    availability = crud.check_seat_availability(
        session=session,
        booking_date=booking_date,
        seat_id=seat_id
    )
    return availability


# ============================================================================
# Booking Endpoints
# ============================================================================

@router.get("/", response_model=SeatBookingsPublic)
def read_bookings(
    session: SessionDep,
    current_user: CurrentUser,
    skip: int = 0,
    limit: int = 100
) -> Any:
    """
    Retrieve bookings for the current user.
    """
    bookings = crud.get_user_bookings(
        session=session,
        user_id=current_user.id,
        skip=skip,
        limit=limit
    )
    count_statement = (
        select(func.count())
        .select_from(SeatBooking)
        .where(SeatBooking.user_id == current_user.id)
    )
    count = session.exec(count_statement).one()

    return SeatBookingsPublic(data=bookings, count=count)


@router.post("/", response_model=SeatBookingPublic)
def create_booking(
    *,
    session: SessionDep,
    current_user: CurrentUser,
    booking_in: SeatBookingCreate,
) -> Any:
    """
    Create a new seat booking.
    Validates seat availability before creating the booking.
    """
    try:
        booking = crud.create_booking(
            session=session,
            booking_in=booking_in,
            user_id=current_user.id
        )
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    return booking


@router.get("/{booking_id}", response_model=SeatBookingPublic)
def read_booking(
    session: SessionDep,
    current_user: CurrentUser,
    booking_id: uuid.UUID
) -> Any:
    """
    Get booking by ID.
    """
    booking = crud.get_booking_by_id(session=session, booking_id=booking_id)

    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")

    if booking.user_id != current_user.id and not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized to view this booking")

    return booking


@router.patch("/{booking_id}", response_model=SeatBookingPublic)
def update_booking(
    *,
    session: SessionDep,
    current_user: CurrentUser,
    booking_id: uuid.UUID,
    booking_in: SeatBookingUpdate,
) -> Any:
    """
    Update a booking (mainly for status changes).
    """
    booking = crud.get_booking_by_id(session=session, booking_id=booking_id)

    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")

    if booking.user_id != current_user.id and not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized to update this booking")

    booking = crud.update_booking(
        session=session,
        db_booking=booking,
        booking_in=booking_in
    )
    return booking


@router.post("/{booking_id}/cancel", response_model=SeatBookingPublic)
def cancel_booking(
    session: SessionDep,
    current_user: CurrentUser,
    booking_id: uuid.UUID
) -> Any:
    """
    Cancel a booking.
    """
    try:
        booking = crud.cancel_booking(
            session=session,
            booking_id=booking_id,
            user_id=current_user.id
        )
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    return booking


@router.delete("/{booking_id}", response_model=Message)
def delete_booking(
    session: SessionDep,
    current_user: CurrentUser,
    booking_id: uuid.UUID
) -> Any:
    """
    Delete a booking (hard delete).
    """
    booking = crud.get_booking_by_id(session=session, booking_id=booking_id)

    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")

    if booking.user_id != current_user.id and not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized to delete this booking")

    session.delete(booking)
    session.commit()

    return Message(message="Booking deleted successfully")


@router.get("/calendar/{year}/{month}", response_model=list[SeatAvailability])
def get_calendar_availability(
    session: SessionDep,
    year: int,
    month: int,
) -> Any:
    """
    Get seat availability for an entire month.
    Returns daily availability data for calendar view.
    """
    from datetime import datetime
    import calendar

    # Get number of days in month
    _, num_days = calendar.monthrange(year, month)

    availability_list = []
    for day in range(1, num_days + 1):
        try:
            booking_date = date(year, month, day)
            availability = crud.check_seat_availability(
                session=session,
                booking_date=booking_date
            )
            availability_list.append(availability)
        except ValueError:
            # Skip invalid dates
            continue

    return availability_list
