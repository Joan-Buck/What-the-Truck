from flask import Flask
from flask_wtf import FlaskForm
from wtforms import TextAreaField, SelectField
from wtforms.validators import InputRequired, Length

class ReviewForm(FlaskForm):
    rating = SelectField("rating", validators=[InputRequired(message="Please select a rating.")],
            choices=['1', '2', '3', '4', '5'])
    content = TextAreaField("content", validators=[InputRequired(message="Please add your review content."),
                Length(min=2, max=500, message="Please enter a review between 2 and 300 characters in length.")])
