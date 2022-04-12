from flask import Blueprint, request
from app.models import Truck, db, TruckImage
from sqlalchemy import or_

search_routes = Blueprint('search', __name__)


# SEARCH food trucks
@search_routes.route('/<searchItem>', methods=["GET"])
def search_food_trucks(searchItem):
    # args = request.args
    # search_item = args.get('searchItem')

    # TO DO: query for food trucks by name, city, and cuisine
    food_trucks = Truck.query.filter(or_(Truck.name.ilike(f'%{searchItem}%'),
                                          Truck.city.ilike(f'%{searchItem}%'),
                                          Truck.cuisine.ilike(f'%{searchItem}%')))

    # food_trucks_city = Truck.query.filter(Truck.city.ilike(f'%{searchItem}%'))
    # food_trucks_cuisine = Truck.query.filter(Truck.cuisine.ilike(f'%{searchItem}%'))

    food_trucks_dicts = [food_truck.to_dict() for food_truck in food_trucks]
  
    return { "foodTrucks": food_trucks_dicts }
