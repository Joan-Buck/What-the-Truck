from flask import Blueprint, request
from app.models import Truck, db, TruckImage

search_routes = Blueprint('search', __name__)


# SEARCH food trucks
@search_routes.route('/<searchItem>', methods=["GET"])
def search_food_trucks(searchItem):
    # args = request.args
    # search_item = args.get('searchItem')
    print('search item=========', searchItem)

    food_trucks = Truck.query.filter(Truck.name.ilike(f'%{searchItem}%'))

    food_trucks_dicts = [food_truck.to_dict() for food_truck in food_trucks]
    return { "foodTrucks": food_trucks_dicts }
