"""Add seat booking tables

Revision ID: 0001_add_seat_booking
Revises: 9c0a54914c78
Create Date: 2025-10-11 16:00:00.000000

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
import sqlmodel.sql.sqltypes


# revision identifiers, used by Alembic.
revision: str = '0001_add_seat_booking'
down_revision: Union[str, None] = '9c0a54914c78'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # Create seat table
    op.create_table('seat',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('seat_number', sqlmodel.sql.sqltypes.AutoString(length=10), nullable=False),
        sa.Column('is_active', sa.Boolean(), nullable=False),
        sa.Column('description', sqlmodel.sql.sqltypes.AutoString(length=255), nullable=True),
        sa.Column('created_at', sa.DateTime(), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_seat_seat_number'), 'seat', ['seat_number'], unique=True)

    # Create seatbooking table
    op.create_table('seatbooking',
        sa.Column('id', sqlmodel.sql.sqltypes.GUID(), nullable=False),
        sa.Column('seat_id', sa.Integer(), nullable=False),
        sa.Column('booking_date', sa.Date(), nullable=False),
        sa.Column('plan_type', sa.Enum('DAILY', 'MONTHLY', 'ANNUAL', name='plantype'), nullable=False),
        sa.Column('start_time', sa.DateTime(), nullable=True),
        sa.Column('end_time', sa.DateTime(), nullable=True),
        sa.Column('notes', sqlmodel.sql.sqltypes.AutoString(length=500), nullable=True),
        sa.Column('user_id', sqlmodel.sql.sqltypes.GUID(), nullable=False),
        sa.Column('status', sa.Enum('PENDING', 'CONFIRMED', 'CANCELLED', 'EXPIRED', name='bookingstatus'), nullable=False),
        sa.Column('amount_paid', sa.Float(), nullable=False),
        sa.Column('payment_id', sqlmodel.sql.sqltypes.AutoString(length=255), nullable=True),
        sa.Column('created_at', sa.DateTime(), nullable=False),
        sa.Column('updated_at', sa.DateTime(), nullable=False),
        sa.ForeignKeyConstraint(['seat_id'], ['seat.id'], ),
        sa.ForeignKeyConstraint(['user_id'], ['user.id'], ondelete='CASCADE'),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_seatbooking_booking_date'), 'seatbooking', ['booking_date'], unique=False)
    op.create_index(op.f('ix_seatbooking_plan_type'), 'seatbooking', ['plan_type'], unique=False)
    op.create_index(op.f('ix_seatbooking_status'), 'seatbooking', ['status'], unique=False)


def downgrade() -> None:
    op.drop_index(op.f('ix_seatbooking_status'), table_name='seatbooking')
    op.drop_index(op.f('ix_seatbooking_plan_type'), table_name='seatbooking')
    op.drop_index(op.f('ix_seatbooking_booking_date'), table_name='seatbooking')
    op.drop_table('seatbooking')
    op.drop_index(op.f('ix_seat_seat_number'), table_name='seat')
    op.drop_table('seat')

    # Drop enum types
    op.execute('DROP TYPE IF EXISTS bookingstatus')
    op.execute('DROP TYPE IF EXISTS plantype')
