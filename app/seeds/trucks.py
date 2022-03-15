from app.models import db, Truck
from datetime import datetime

def seed_trucks():
    truck1 = Truck(owner_id=1, name="Taco Love", address="", city="San Diego", state="California", zip_code="", cuisine="", price="", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())
