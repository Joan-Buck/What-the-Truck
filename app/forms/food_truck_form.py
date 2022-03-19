from random import choices
from flask import Flask
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms.validators import DataRequired, InputRequired, Length, ValidationError, url

def validate_zip_code(form, field):
        zip_code = field.data

        if zip_code.isnumeric() is False:
            raise ValidationError('Zip code must be 5 digits.')

# def validate_image_url(form, field):
#         image_url = field.data
#         substrings = ['jpg', 'jpeg', 'JPG', 'JPEG', 'png', 'PNG']
#         results = []
#         for substr in substrings:
#                 results.append(substr in image_url)
#         if results is False:
#                 raise ValidationError('Image URL must contain jpg/jpeg or png.')
#         # jpg = 'jpg'
#         # jpeg = 'jpeg'
#         # png = 'png'

#         # if jpg not in image_url:
#         #         raise ValidationError('Image URL must contain jpg/jpeg or png.')
#         # elif jpeg not in image_url:
#         #         raise ValidationError('Image URL must contain jpg/jpeg or png.')
#         # elif png not in image_url:
#         #         raise ValidationError('Image URL must contain jpg/jpeg or png.')


class FoodTruckForm(FlaskForm):
    name = StringField("name", validators=[InputRequired(message="Please provide a name for your food truck."),
                Length(min=1, max=100, message="Please limit your food truck's name to 100 characters or less.")])
    address = StringField("address", validators=[InputRequired(message="Please provide an address for your food truck."),
                Length(min=1, max=100, message="Please limit your food truck's address to 100 characters or less.")])
    city = StringField("city", validators=[InputRequired(message="Please provide the city for your food truck."),
                Length(min=1, max=100, message="Please limit your food truck's city to 100 characters or less.")])
    state = SelectField("state", validators=[InputRequired(message="Please select 1 US-based state for your food truck. Our app is currently only serving US based food trucks.")],
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
    zip_code = StringField("zip_code", validators=[InputRequired(message="Please provide the 5 digit US zip code for your food truck. Our app is currently only serving US based food trucks."),
                validate_zip_code,
                Length(min=5, max=5, message="Please enter a 5 digit US zip code. Our app is currently only serving US based food trucks.")])
    cuisine = SelectField("cuisine", validators=[InputRequired(message="Please select 1 cuisine type for your food truck. Our app is currently only serving food trucks with these cuisines.")],
            choices=['Tacos/Burritos', 'Sandwiches', 'Coffee', 'BBQ', 'Ice Cream', 'Dessert', 'Sushi', 'Indian'])
    price = SelectField("price", validators=[InputRequired(message="Please select 1 price category for your food truck.")],
            choices=['$', '$$', '$$$', '$$$$'])
    image_url = StringField("image_url", validators=[InputRequired(message="Please provide an image URL for your food truck."),
                url()])
         # TO DO: add error handling for must contain jpg, jpeg, or png to be considered image file
               
