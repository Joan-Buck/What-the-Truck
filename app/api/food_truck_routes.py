from crypt import methods
from flask import Blueprint
from app.models import Truck, db

food_truck_routes = Blueprint('food-trucks', __name__)


# TO DO: add validation error handler from auth routes

# GET all food trucks
@food_truck_routes.route('/', methods=["GET"])
def get_food_trucks():
    food_trucks = Truck.query.all()
    # print(food_trucks)
    food_trucks_dicts = [food_truck.to_dict() for food_truck in food_trucks]
    # print(food_trucks_dicts)
    return { "foodTrucks": food_trucks_dicts }
