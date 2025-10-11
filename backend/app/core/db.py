from sqlmodel import Session, create_engine, select

from app import crud
from app.core.config import settings
from app.models import User, UserCreate

# Configure SSL for production database connections (required by Render)
# Using 'prefer' instead of 'require' to avoid SSL handshake issues with Render's internal DB connections
connect_args = {}
if settings.ENVIRONMENT == "production":
    connect_args = {"sslmode": "prefer"}

# Connection pooling settings to prevent "SSL connection closed unexpectedly" errors
# pool_pre_ping checks connections before using them
# pool_recycle prevents stale connections (300 seconds = 5 minutes)
engine = create_engine(
    str(settings.SQLALCHEMY_DATABASE_URI),
    connect_args=connect_args,
    pool_pre_ping=True,
    pool_recycle=300
)


# make sure all SQLModel models are imported (app.models) before initializing DB
# otherwise, SQLModel might fail to initialize relationships properly
# for more details: https://github.com/fastapi/full-stack-fastapi-template/issues/28


def init_db(session: Session) -> None:
    # Tables should be created with Alembic migrations
    # But if you don't want to use migrations, create
    # the tables un-commenting the next lines
    # from sqlmodel import SQLModel

    # This works because the models are already imported and registered from app.models
    # SQLModel.metadata.create_all(engine)

    user = session.exec(
        select(User).where(User.email == settings.FIRST_SUPERUSER)
    ).first()
    if not user:
        user_in = UserCreate(
            email=settings.FIRST_SUPERUSER,
            password=settings.FIRST_SUPERUSER_PASSWORD,
            is_superuser=True,
        )
        user = crud.create_user(session=session, user_create=user_in)
