from ctypes import addressof
from app.models import db, Truck
from datetime import datetime

def seed_trucks():
    truck1 = Truck(owner_id=1, name="Taco Love", address="", city="San Diego", zip_code="", cuisine="", price="", lat=1, long=1 )
