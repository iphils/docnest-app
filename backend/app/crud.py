import uuid
from datetime import date, datetime
from typing import Any

from sqlmodel import Session, select, func, and_

from app.core.security import get_password_hash, verify_password
from app.models import (
    Item, ItemCreate, User, UserCreate, UserUpdate,
    Seat, SeatBooking, SeatBookingCreate, SeatBookingUpdate,
    BookingStatus, SeatAvailability
)


def create_user(*, session: Session, user_create: UserCreate) -> User:
    db_obj = User.model_validate(
        user_create, update={"hashed_password": get_password_hash(user_create.password)}
    )
    session.add(db_obj)
    session.commit()
    session.refresh(db_obj)
    return db_obj


def update_user(*, session: Session, db_user: User, user_in: UserUpdate) -> Any:
    user_data = user_in.model_dump(exclude_unset=True)
    extra_data = {}
    if "password" in user_data:
        password = user_data["password"]
        hashed_password = get_password_hash(password)
        extra_data["hashed_password"] = hashed_password
    db_user.sqlmodel_update(user_data, update=extra_data)
    session.add(db_user)
    session.commit()
    session.refresh(db_user)
    return db_user


def get_user_by_email(*, session: Session, email: str) -> User | None:
    statement = select(User).where(User.email == email)
    session_user = session.exec(statement).first()
    return session_user


def authenticate(*, session: Session, email: str, password: str) -> User | None:
    db_user = get_user_by_email(session=session, email=email)
    if not db_user:
        return None
    if not verify_password(password, db_user.hashed_password):
        return None
    return db_user


def create_item(*, session: Session, item_in: ItemCreate, owner_id: uuid.UUID) -> Item:
    db_item = Item.model_validate(item_in, update={"owner_id": owner_id})
    session.add(db_item)
    session.commit()
    session.refresh(db_item)
    return db_item


# ============================================================================
# Seat CRUD Operations
# ============================================================================

def get_all_seats(*, session: Session) -> list[Seat]:
    """Get all seats in the study room"""
    statement = select(Seat).where(Seat.is_active == True)
    return list(session.exec(statement).all())


def get_seat_by_id(*, session: Session, seat_id: int) -> Seat | None:
    """Get a specific seat by ID"""
    return session.get(Seat, seat_id)


def create_seat(*, session: Session, seat_number: str, description: str | None = None) -> Seat:
    """Create a new seat"""
    db_seat = Seat(seat_number=seat_number, description=description)
    session.add(db_seat)
    session.commit()
    session.refresh(db_seat)
    return db_seat


# ============================================================================
# Seat Booking CRUD Operations
# ============================================================================

def check_seat_availability(
    *,
    session: Session,
    booking_date: date,
    seat_id: int | None = None
) -> SeatAvailability:
    """Check seat availability for a given date"""
    # Get total active seats
    total_seats_query = select(func.count(Seat.id)).where(Seat.is_active == True)
    total_seats = session.exec(total_seats_query).one()

    # Get booked seats for the date (excluding cancelled/expired)
    booked_query = select(SeatBooking.seat_id).where(
        and_(
            SeatBooking.booking_date == booking_date,
            SeatBooking.status.in_([BookingStatus.PENDING, BookingStatus.CONFIRMED])
        )
    )

    if seat_id:
        booked_query = booked_query.where(SeatBooking.seat_id == seat_id)

    booked_seat_ids = list(session.exec(booked_query).all())

    # Get available seat IDs
    all_seats = session.exec(select(Seat.id).where(Seat.is_active == True)).all()
    available_seat_ids = [sid for sid in all_seats if sid not in booked_seat_ids]

    return SeatAvailability(
        date=booking_date,
        total_seats=total_seats,
        available_seats=len(available_seat_ids),
        booked_seats=len(booked_seat_ids),
        available_seat_ids=available_seat_ids
    )


def create_booking(
    *,
    session: Session,
    booking_in: SeatBookingCreate,
    user_id: uuid.UUID
) -> SeatBooking:
    """Create a new seat booking"""
    # Check if seat is available
    availability = check_seat_availability(
        session=session,
        booking_date=booking_in.booking_date,
        seat_id=booking_in.seat_id
    )

    if booking_in.seat_id not in availability.available_seat_ids:
        raise ValueError(f"Seat {booking_in.seat_id} is not available for {booking_in.booking_date}")

    # Create booking
    db_booking = SeatBooking.model_validate(
        booking_in,
        update={"user_id": user_id}
    )
    session.add(db_booking)
    session.commit()
    session.refresh(db_booking)
    return db_booking


def get_user_bookings(
    *,
    session: Session,
    user_id: uuid.UUID,
    skip: int = 0,
    limit: int = 100
) -> list[SeatBooking]:
    """Get all bookings for a user"""
    statement = (
        select(SeatBooking)
        .where(SeatBooking.user_id == user_id)
        .order_by(SeatBooking.booking_date.desc())
        .offset(skip)
        .limit(limit)
    )
    return list(session.exec(statement).all())


def get_booking_by_id(
    *,
    session: Session,
    booking_id: uuid.UUID
) -> SeatBooking | None:
    """Get a specific booking by ID"""
    return session.get(SeatBooking, booking_id)


def update_booking(
    *,
    session: Session,
    db_booking: SeatBooking,
    booking_in: SeatBookingUpdate
) -> SeatBooking:
    """Update a booking (mainly for status changes)"""
    booking_data = booking_in.model_dump(exclude_unset=True)
    db_booking.sqlmodel_update(booking_data, update={"updated_at": datetime.utcnow()})
    session.add(db_booking)
    session.commit()
    session.refresh(db_booking)
    return db_booking


def cancel_booking(
    *,
    session: Session,
    booking_id: uuid.UUID,
    user_id: uuid.UUID
) -> SeatBooking:
    """Cancel a booking"""
    db_booking = get_booking_by_id(session=session, booking_id=booking_id)

    if not db_booking:
        raise ValueError("Booking not found")

    if db_booking.user_id != user_id:
        raise ValueError("Not authorized to cancel this booking")

    if db_booking.status == BookingStatus.CANCELLED:
        raise ValueError("Booking is already cancelled")

    db_booking.status = BookingStatus.CANCELLED
    db_booking.updated_at = datetime.utcnow()
    session.add(db_booking)
    session.commit()
    session.refresh(db_booking)
    return db_booking


def get_bookings_by_date(
    *,
    session: Session,
    booking_date: date,
    skip: int = 0,
    limit: int = 100
) -> list[SeatBooking]:
    """Get all bookings for a specific date"""
    statement = (
        select(SeatBooking)
        .where(SeatBooking.booking_date == booking_date)
        .order_by(SeatBooking.created_at)
        .offset(skip)
        .limit(limit)
    )
    return list(session.exec(statement).all())
