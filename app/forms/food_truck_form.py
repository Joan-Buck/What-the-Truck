from random import choices
from flask import Flask
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, DecimalField, FloatField
from wtforms.validators import DataRequired, InputRequired, Length, ValidationError, url
import re

def validate_zip_code(form, field):
        zip_code = field.data

        if zip_code.isnumeric() is False:
            raise ValidationError('Zip code must be 5 digits.')

def validate_image_url(form, field):
        image_url = field.data

        valid = re.search(r'\.(jpg|jpeg|png|gif)$', image_url.lower())

        if not valid:
                raise ValidationError('Image URL must end in .jpg, .jpeg, .gif, or .png.')

def validate_city(form, field):
        city = field.data

        if any(c.isnumeric() for c in city):
                raise ValidationError('City must not contain numbers')


class FoodTruckForm(FlaskForm):
    name = StringField("name", validators=[InputRequired(message="Please provide a name for your food truck."),
                Length(min=2, max=100, message="Please provide a name that is between 2 and 100 characters long.")])
    address = StringField("address", validators=[InputRequired(message="Please provide an address for your food truck."),
                Length(min=5, max=100, message="Please provide an address that is between 5 and 100 characters long.")])
    city = StringField("city", validators=[InputRequired(message="Please provide the US based city for your food truck."),
                validate_city,
                Length(min=2, max=100, message="Please provide a city name that is between 2 and 100 characters long.")])
    state = SelectField("state", validators=[InputRequired(message="Please select 1 US based state for your food truck.")],
                choices=['Alabama', 'Alaska', 'Arizona', 'Arkansas',
                'California', 'Colorado', 'Connecticut',
                'Delaware',
                'Florida',
                'Georgia',
                'Hawaii',
                'Idaho', 'Illinois', 'Indiana', 'Iowa',
                'Kansas', 'Kentucky',
                'Lousiana',
                'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
                'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
                'Ohio', 'Oklahoma', 'Oregon',
                'Pennsylvania',
                'Rhode Island',
                'South Carolina', 'South Dakota',
                'Tennessee', 'Texas',
                'Utah',
                'Vermont', 'Virginia',
                'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'])
    zip_code = StringField("zip_code", validators=[InputRequired(message="Please provide the 5 digit US zip code for your food truck."),
                validate_zip_code,
                Length(min=5, max=5, message="Please enter a 5 digit US zip code.")])
    cuisine = SelectField("cuisine", validators=[InputRequired(message="Please select 1 cuisine type for your food truck. Our app is currently only serving food trucks with these cuisines.")],
            choices=['Tacos/Burritos', 'Sandwiches', 'Coffee', 'BBQ', 'Ice Cream', 'Dessert', 'Sushi', 'Indian'])
    price = SelectField("price", validators=[InputRequired(message="Please select 1 price range for your food truck.")],
            choices=['$', '$$', '$$$', '$$$$'])
    lat = FloatField("lat")
    long = FloatField("long")
    image_url = StringField("image_url", validators=[InputRequired(message="Please provide an image URL for your food truck. If the URL does not end in .jpg, .jpeg, .gif, or .png extension, our default image will render."),
                Length(min=1, max=255, message="Please limit image URLs to 255 characters or less."),
                validate_image_url,
                url()])
