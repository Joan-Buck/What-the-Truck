from email import message
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('The provided email was not found.')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('A user with the provided email was not found.')
    if not user.check_password(password):
        raise ValidationError('Password was incorrect.')


class LoginForm(FlaskForm):
    email = StringField('email',
                validators=[DataRequired(message='Please enter your email.'),
                            user_exists,
                            Length(min=4, max=255, message='Please enter an email between 4 and 255 characters long.'),
                            Email(message='Please enter a valid email address.')])
    password = StringField('password', validators=[
                           DataRequired(message='Please enter your password.'),
                           password_matches,
                           Length(min=4, max=255, message='Please enter a password between 4 and 255 characters long.')])
