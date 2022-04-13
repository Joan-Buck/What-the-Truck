from flask import Blueprint, request, abort
from app.models import Truck, db, TruckImage
from flask_login import current_user
from app.forms import FoodTruckForm
from app.config import Config
import googlemaps

food_truck_routes = Blueprint('food-trucks', __name__)
gmaps = googlemaps.Client(key=f"{Config.FLASK_GOOGLEMAPS_KEY}")

def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages


# GET all food trucks
@food_truck_routes.route('/', methods=["GET"])
def get_food_trucks():
    food_trucks = Truck.query.all()
    food_trucks_dicts = [food_truck.to_dict() for food_truck in food_trucks]

    return { "foodTrucks": food_trucks_dicts }

# GET food truck by ID
@food_truck_routes.route('/<int:id>', methods=["GET"])
def get_one_food_truck(id):
    food_truck = Truck.query.get(id)

    if food_truck is None:
        abort(404)

    return food_truck.to_dict()



# GET all food trucks by user
@food_truck_routes.route('/my-food-trucks', methods=["GET"])
def get_my_food_trucks():
    user_id = current_user.id
    food_trucks = Truck.query.filter(Truck.owner_id == user_id).all()
    food_trucks_dicts = [food_truck.to_dict() for food_truck in food_trucks]

    return { "foodTrucks": food_trucks_dicts }

# POST new food truck
@food_truck_routes.route('/', methods=["POST"])
def post_food_truck():
    form = FoodTruckForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    owner_id = current_user.id


    if form.validate_on_submit():
        # add in geocoding here
        address = form.data['address']
        city = form.data['city']
        state = form.data['state']
        full_address = f"{address}, {city}, {state}"


        geocode_result = gmaps.geocode(full_address)
        # print('geocode ========', geocode_result)
        geocode_lat = geocode_result[0]["geometry"]["location"]["lat"]
        geocode_lon = geocode_result[0]["geometry"]["location"]["lng"]
        #test - print results
        # print ('lat, lon ========', lat,lon)
        # geocode ======== [{'address_components': [{'long_name': '3116', 'short_name': '3116', 'types': ['street_number']},
        # {'long_name': 'Lily Drive', 'short_name': 'Lily Dr', 'types': ['route']}, {'long_name': 'Bozeman', 'short_name': 'Bozeman', 'types': ['locality', 'political']},
        # {'long_name': 'Gallatin County', 'short_name': 'Gallatin County', 'types': ['administrative_area_level_2', 'political']},
        # {'long_name': 'Montana', 'short_name': 'MT', 'types': ['administrative_area_level_1', 'political']},
        # {'long_name': 'United States', 'short_name': 'US', 'types': ['country', 'political']},
        # {'long_name': '59718', 'short_name': '59718', 'types': ['postal_code']},
        # {'long_name': '6088', 'short_name': '6088', 'types': ['postal_code_suffix']}],
        # 'formatted_address': '3116 Lily Dr, Bozeman, MT 59718, USA',
        # 'geometry': {'bounds': {'northeast': {'lat': 45.68761480000001, 'lng': -111.0795881}, 'southwest': {'lat': 45.687442, 'lng': -111.0797939}},
        # 'location': {'lat': 45.6874872, 'lng': -111.0797098}, 'location_type': 'ROOFTOP', 'viewport': {'northeast': {'lat': 45.68895558029149, 'lng': -111.0783420197085}, 'southwest': {'lat': 45.68625761970849, 'lng': -111.0810399802915}}}, 'place_id': 'ChIJFRAt18ZFRVMR7RHnXA7oFgE', 'types': ['premise']
        # }]

        food_truck = Truck(owner_id=owner_id, name=form.data['name'], address=form.data['address'], city=form.data['city'], state=form.data['state'], zip_code=form.data['zip_code'], cuisine=form.data['cuisine'], lat=geocode_lat, long=geocode_lon, price=form.data['price'])
        new_food_truck_image = TruckImage(truck=food_truck, image_url=form.data['image_url'])

        db.session.add(food_truck)
        db.session.add(new_food_truck_image)

        db.session.commit()

        return food_truck.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400



# PUT food truck
@food_truck_routes.route('/<int:id>', methods=["PUT"])
def put_food_truck(id):
    form = FoodTruckForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    owner_id = current_user.id

    food_truck = Truck.query.get(id)

    if form.validate_on_submit():
        address = form.data['address']
        city = form.data['city']
        state = form.data['state']
        full_address = f"{address}, {city}, {state}"


        geocode_result = gmaps.geocode(full_address)
        # print('geocode ========', geocode_result)
        geocode_lat = geocode_result[0]["geometry"]["location"]["lat"]
        geocode_lon = geocode_result[0]["geometry"]["location"]["lng"]

        food_truck.owner_id = owner_id
        food_truck.name = form.data['name']
        food_truck.address = form.data['address']
        food_truck.city = form.data['city']
        food_truck.state = form.data['state']
        food_truck.zip_code = form.data['zip_code']
        food_truck.cuisine = form.data['cuisine']
        food_truck.price = form.data['price']
        food_truck.lat = geocode_lat
        food_truck.long = geocode_lon

        if len(food_truck.images) > 0:
            food_truck.images[0].image_url = form.data['image_url']
        else:
            new_food_truck_image = TruckImage(truck=food_truck, image_url=form.data['image_url'])
            db.session.add(new_food_truck_image)

        db.session.add(food_truck)
        db.session.commit()

        return food_truck.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400



# DELETE food truck
@food_truck_routes.route('/<int:id>', methods=["DELETE"])
def delete_food_truck(id):
    food_truck = Truck.query.get(id)

    db.session.delete(food_truck)
    db.session.commit()

    return {id: id}
