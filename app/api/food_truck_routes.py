from crypt import methods
from flask import Blueprint, request
from app.models import Truck, db, TruckImage
from flask_login import current_user
from app.forms import FoodTruckForm


food_truck_routes = Blueprint('food-trucks', __name__)


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
        food_truck = Truck(owner_id=owner_id, name=form.data['name'], address=form.data['address'], city=form.data['city'], state=form.data['state'], zip_code=form.data['zip_code'], cuisine=form.data['cuisine'], price=form.data['price'])
        new_food_truck_image = TruckImage(truck=food_truck, image_url=form.data['image_url'])

        db.session.add(food_truck)
        db.session.add(new_food_truck_image)

        db.session.commit()

        return food_truck.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}



# TO DO: add PUT food truck


# DELETE food truck
@food_truck_routes.route('/<int:id>', methods=["DELETE"])
def delete_food_truck(id):
    food_truck = Truck.query.get(id)

    db.session.delete(food_truck)
    db.session.commit()

    return {id: id}
