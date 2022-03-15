from .db import db
from datetime import datetime

class Truck(db.Model):
    __tablename__ = 'trucks'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    name = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(100), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    zip_code = db.Column(db.String(10), nullable=False)
    cuisine = db.Column(db.String(50), nullable=False)
    price = db.Column(db.String(4), nullable=False)
    lat = db.Column(db.Numeric, nullable=True)
    long = db.Column(db.Numeric, nullable=True)

    owner = db.relationship("User", back_populates="trucks")
    reviews = db.relationship("Review", back_populates="truck", cascade="all, delete")
    images = db.relationship("TruckImage", back_populates="truck", cascade="all, delete")

# TO DO: add to_dict method
