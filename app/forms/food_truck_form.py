from random import choices
from flask import Flask
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField
from wtforms.validators import DataRequired, InputRequired, Length

class FoodTruckForm(FlaskForm):
    name = StringField("name", validators=[InputRequired(message="Please provide a name for your food truck."), Length(min=1, max=100, message="Please limit your food truck's name to 100 characters or less.")])
    address = StringField("address", validators=[InputRequired(message="Please provide an address for your food truck."), Length(min=1, max=100, message="Please limit your food truck's address to 100 characters or less.")])
    city = StringField("city", validators=[InputRequired(message="Please provide the city for your food truck."), Length(min=1, max=100, message="Please limit your food truck's city to 100 characters or less.")])
    state = StringField("state", validators=[InputRequired(message="Please provide the full US based state name for your food truck. Our app is currently only serving US based food trucks."), Length(min=4, max=50, message="Please provide the full US based state name for your food truck (limited to 50 characters). Our app is currently only serving US based food trucks.")])
    zip_code = StringField("zip_code", validators=[InputRequired(message="Please provide the US zip code for your food truck. Our app is currently only serving US based food trucks."), Length(min=1, max=5, message="Please enter a 5 digit US zip code. Our app is currently only serving US based food trucks.")])
    cuisine = SelectField("cuisine", validators=[InputRequired(message="Please select 1 cuisine type for your food truck. Our app is currently only serving food trucks with these cuisines.")],
            choices=['Tacos/Burritos', 'Sandwiches', 'Coffee', 'BBQ', 'Ice Cream', 'Dessert', 'Sushi', 'Indian'])
    price = SelectField("price", validators=[InputRequired(message="Please select 1 price category for your food truck.")],
            choices=['$', '$$', '$$$', '$$$$'])
    image_url = StringField("image_url", validators=[InputRequired(message="Please provide an image URL for your food truck.")])
