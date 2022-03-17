from flask import Blueprint, request
from app.models import Review, db
from flask_login import current_user


review_routes = Blueprint('reviews', __name__)

# GET all reviews
@review_routes.route('', methods=["GET"])
def get_reviews():
    args = request.args
    id = args.get('foodTruckId')
    
    reviews = Review.query.filter(Review.truck_id == id).all()
    reviews_dicts = [review.to_dict() for review in reviews]


    return { "reviews": reviews_dicts }
