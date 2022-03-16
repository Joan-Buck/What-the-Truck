from crypt import methods
from flask import Blueprint
from app.models import Truck, db
from flask_login import current_user

food_truck_routes = Blueprint('food-trucks', __name__)


# TO DO: add validation error handler from auth routes

# GET all food trucks
@food_truck_routes.route('/', methods=["GET"])
def get_food_trucks():
    food_trucks = Truck.query.all()
    food_trucks_dicts = [food_truck.to_dict() for food_truck in food_trucks]

    return { "foodTrucks": food_trucks_dicts }


# GET all food trucks by user
@food_truck_routes.route('/my-food-trucks', methods=["GET"])
def get_my_food_trucks():
    user_id = current_user.id
    food_trucks = Truck.query.filter(Truck.owner_id == user_id).all()
    food_trucks_dicts = [food_truck.to_dict() for food_truck in food_trucks]

    return { "foodTrucks": food_trucks_dicts }
