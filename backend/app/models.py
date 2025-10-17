import uuid
from datetime import date, datetime
from enum import Enum

from pydantic import EmailStr
from sqlmodel import Field, Relationship, SQLModel


# Shared properties
class UserBase(SQLModel):
    email: EmailStr = Field(unique=True, index=True, max_length=255)
    is_active: bool = True
    is_superuser: bool = False
    full_name: str | None = Field(default=None, max_length=255)


# Properties to receive via API on creation
class UserCreate(UserBase):
    password: str = Field(min_length=8, max_length=40)


class UserRegister(SQLModel):
    email: EmailStr = Field(max_length=255)
    password: str = Field(min_length=8, max_length=40)
    full_name: str | None = Field(default=None, max_length=255)


# Properties to receive via API on update, all are optional
class UserUpdate(UserBase):
    email: EmailStr | None = Field(default=None, max_length=255)  # type: ignore
    password: str | None = Field(default=None, min_length=8, max_length=40)


class UserUpdateMe(SQLModel):
    full_name: str | None = Field(default=None, max_length=255)
    email: EmailStr | None = Field(default=None, max_length=255)


class UpdatePassword(SQLModel):
    current_password: str = Field(min_length=8, max_length=40)
    new_password: str = Field(min_length=8, max_length=40)


# Database model, database table inferred from class name
class User(UserBase, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    hashed_password: str
    items: list["Item"] = Relationship(back_populates="owner", cascade_delete=True)
    bookings: list["SeatBooking"] = Relationship(back_populates="user", cascade_delete=True)


# Properties to return via API, id is always required
class UserPublic(UserBase):
    id: uuid.UUID


class UsersPublic(SQLModel):
    data: list[UserPublic]
    count: int


# Shared properties
class ItemBase(SQLModel):
    title: str = Field(min_length=1, max_length=255)
    description: str | None = Field(default=None, max_length=255)


# Properties to receive on item creation
class ItemCreate(ItemBase):
    pass


# Properties to receive on item update
class ItemUpdate(ItemBase):
    title: str | None = Field(default=None, min_length=1, max_length=255)  # type: ignore


# Database model, database table inferred from class name
class Item(ItemBase, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    owner_id: uuid.UUID = Field(
        foreign_key="user.id", nullable=False, ondelete="CASCADE"
    )
    owner: User | None = Relationship(back_populates="items")


# Properties to return via API, id is always required
class ItemPublic(ItemBase):
    id: uuid.UUID
    owner_id: uuid.UUID


class ItemsPublic(SQLModel):
    data: list[ItemPublic]
    count: int


# Generic message
class Message(SQLModel):
    message: str


# JSON payload containing access token
class Token(SQLModel):
    access_token: str
    token_type: str = "bearer"


# Contents of JWT token
class TokenPayload(SQLModel):
    sub: str | None = None


class NewPassword(SQLModel):
    token: str
    new_password: str = Field(min_length=8, max_length=40)


# ============================================================================
# Seat Booking Models
# ============================================================================

class BookingStatus(str, Enum):
    PENDING = "pending"
    CONFIRMED = "confirmed"
    CANCELLED = "cancelled"
    EXPIRED = "expired"


class PlanType(str, Enum):
    DAILY = "daily"
    MONTHLY = "monthly"
    ANNUAL = "annual"


# Seat model - represents physical seats in the study room
class SeatBase(SQLModel):
    seat_number: str = Field(max_length=10, description="Seat identifier (e.g., A1, A2)")
    is_active: bool = Field(default=True, description="Whether seat is available for booking")
    description: str | None = Field(default=None, max_length=255)


class Seat(SeatBase, table=True):
    id: int = Field(default=None, primary_key=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)

    bookings: list["SeatBooking"] = Relationship(back_populates="seat")


class SeatPublic(SeatBase):
    id: int
    created_at: datetime


class SeatsPublic(SQLModel):
    data: list[SeatPublic]
    count: int


# Seat Booking model
class SeatBookingBase(SQLModel):
    seat_id: int = Field(foreign_key="seat.id")
    booking_date: date = Field(description="Date for which seat is booked")
    plan_type: PlanType = Field(description="Type of booking plan")
    start_time: datetime | None = Field(default=None, description="Start time for hourly bookings")
    end_time: datetime | None = Field(default=None, description="End time for hourly bookings")
    notes: str | None = Field(default=None, max_length=500)


class SeatBookingCreate(SeatBookingBase):
    pass


class SeatBookingUpdate(SQLModel):
    status: BookingStatus | None = None
    notes: str | None = Field(default=None, max_length=500)


class SeatBooking(SeatBookingBase, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    user_id: uuid.UUID = Field(foreign_key="user.id", nullable=False, ondelete="CASCADE")
    status: BookingStatus = Field(default=BookingStatus.PENDING, index=True)

    # Payment details
    amount_paid: float = Field(default=0.0)
    payment_id: str | None = Field(default=None, max_length=255)

    # Timestamps
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    # Relationships
    user: User = Relationship(back_populates="bookings")
    seat: Seat = Relationship(back_populates="bookings")


class SeatBookingPublic(SeatBookingBase):
    id: uuid.UUID
    user_id: uuid.UUID
    status: BookingStatus
    amount_paid: float
    payment_id: str | None
    created_at: datetime
    updated_at: datetime


class SeatBookingsPublic(SQLModel):
    data: list[SeatBookingPublic]
    count: int


# Availability check response
class SeatAvailability(SQLModel):
    date: date
    total_seats: int
    available_seats: int
    booked_seats: int
    available_seat_ids: list[int]
