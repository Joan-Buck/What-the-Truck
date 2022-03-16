from app.seeds.reviews import seed_reviews, undo_reviews
from app.seeds.truck_images import seed_truck_images, undo_truck_images
from flask.cli import AppGroup
from .users import seed_users, undo_users
from .trucks import seed_trucks, undo_trucks
from .truck_images import seed_truck_images, undo_truck_images
from .reviews import seed_reviews, undo_reviews

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # Add other seed functions here
    seed_trucks()
    seed_truck_images()
    seed_reviews()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
    undo_trucks()
    undo_truck_images()
    undo_reviews()
