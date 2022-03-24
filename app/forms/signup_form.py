from email import message
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length, EqualTo, InputRequired
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField('username',
        validators=[DataRequired(message="Please enter a username."),
        username_exists,
        Length(min=2, max=40, message="Please enter a username between 2 and 40 characters long.")])
    email = StringField('email',
        validators=[DataRequired(message="Please enter a valid email address."),
        user_exists,
        Length(min=4, max=255, message='Please enter an email address between 4 and 255 characters long.'),
        Email(message='Please enter a valid email address.')])
    first_name = StringField('first_name',
        validators=[DataRequired(message="Please enter your first name."),
        Length(min=2, max=50, message="Please enter a first name between 2 and 50 characters long.")])
    last_name = StringField('last_name',
        validators=[DataRequired(message='Please enter your last name.'),
        Length(min=2, max=50, message="Please enter a last name between 2 and 50 characters long.")])
    password = StringField('password',
        validators=[InputRequired(message="Please enter a password."),
        Length(min=4, max=255, message='Please enter a password between 4 and 255 characters long.'),
        EqualTo('confirm_password', message='Passwords must match.')])
    confirm_password = StringField('confirm_password',
        validators=[DataRequired(message='Please confirm your password.'),
        Length(min=4, max=255, message='Your passwords must match and be between 4 and 255 characters long.'),])
