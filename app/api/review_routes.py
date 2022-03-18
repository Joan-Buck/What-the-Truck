from crypt import methods
from flask import Blueprint, request
from app.models import Review, db, truck, truck_image
from flask_login import current_user
from app.forms import ReviewForm

review_routes = Blueprint('reviews', __name__)

def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages

# GET all reviews
@review_routes.route('', methods=["GET"])
def get_reviews():
    args = request.args
    id = args.get('foodTruckId')

    reviews = Review.query.filter(Review.truck_id == id).all()
    reviews_dicts = [review.to_dict() for review in reviews]


    return { "reviews": reviews_dicts }

# POST new review
@review_routes.route('/', methods=["POST"])
def post_review():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    user_id = current_user.id
    truck_id = request.json['foodTruckId']

    if form.validate_on_submit():
        review = Review(user_id=user_id, truck_id=truck_id, rating=form.data['rating'], content=form.data['content'])

        db.session.add(review)
        db.session.commit()

        return review.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# PUT review
@review_routes.route('/<int:id>', methods=["PUT"])
def put_review(id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    user_id = current_user.id
    truck_id = request.json['truck_id']

    review = Review.query.get(id)

    if form.validate_on_submit():
        review.user_id = user_id
        review.truck_id = truck_id
        review.rating = form.data['rating']
        review.content = form.data['content']

        db.session.add(review)
        db.session.commit()

        return review.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400


# DELETE review
@review_routes.route('/<int:id>', methods=["DELETE"])
def delete_review(id):
    review = Review.query.get(id)

    db.session.delete(review)
    db.session.commit()

    return {id: id}
