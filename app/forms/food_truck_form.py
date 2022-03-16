from random import choices
from flask import Flask
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField
from wtforms.validators import DataRequired, InputRequired

class FoodTruckForm(FlaskForm):
    name = StringField("name", validators=[InputRequired(message="Please provide a name for your food truck.")])
    address = StringField("address", validators=[InputRequired(message="Please provide an address for your food truck.")])
    city = StringField("city", validators=[InputRequired(message="Please provide the city for your food truck.")])
    state = StringField("state", validators=[InputRequired(message="Please provide the state for your food truck.")])
    zip_code = StringField("zip_code", validators=[InputRequired(message="Please provide the zip code for your food truck.")])
    cuisine = SelectField("cuisine", validators=[InputRequired(message="Please select 1 cuisine type for your food truck.")],
            choices=['Tacos/Burritos', 'Sandwiches', 'Coffee', 'BBQ', 'Ice Cream', 'Dessert', 'Sushi', 'Indian'])
    price = SelectField("price", validators=[InputRequired(message="Please select 1 price category for your food truck.")],
            choices=['$', '$$', '$$$', '$$$$'])
    image_url = StringField("image_url", validators=[InputRequired(message="Please provide an image URL for your food truck.")])
