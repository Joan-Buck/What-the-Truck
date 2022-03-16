from app.models import db, Truck
from datetime import datetime

def seed_trucks():
    truck1 = Truck(owner_id=1, name="Taco Love", address="4637 Market St", city="San Diego", state="California", zip_code="92102", cuisine="Tacos/Burritos", price="$$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())
    truck2 = Truck(owner_id=1, name="Dogtown Dogs", address="", city="Los Angeles", state="California", zip_code="", cuisine="Sandwiches", price="$$$$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())
    truck3 = Truck(owner_id=1, name="Guerrilla Tacos", address="", city="Los Angeles", state="California", zip_code="", cuisine="Tacos/Burritos", price="$$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())
    truck4 = Truck(owner_id=1, name="Nitro Coffee", address="", city="Los Angeles", state="California", zip_code="", cuisine="Coffee", price="$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())
    truck5 = Truck(owner_id=1, name="Wood Shop BBQ", address="", city="Seattle", state="Washington", zip_code="", cuisine="BBQ", price="$$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())

    truck6 = Truck(owner_id=2, name="Yeti Dogs", address="", city="Seattle", state="Washington", zip_code="", cuisine="Sandwiches", price="$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())
    truck7 = Truck(owner_id=2, name="Uncle John's BBQ", address="", city="Seattle", state="Washington", zip_code="", cuisine="BBQ", price="$$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())
    truck8 = Truck(owner_id=2, name="Cold Cookie Co.", address="", city="Austin", state="Texas", zip_code="", cuisine="Ice Cream", price="$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())
    truck9 = Truck(owner_id=2, name="Hey Cupcake!", address="", city="Austin", state="Texas", zip_code="", cuisine="Dessert", price="$$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())
    truck10 = Truck(owner_id=2, name="Dawa Sushi", address="", city="Austin", state="Texas", zip_code="", cuisine="Sushi", price="$$$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())

    truck11 = Truck(owner_id=3, name="Mysttik Masaala", address="", city="New York", state="New York", zip_code="", cuisine="Indian", price="$$$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())
    truck12 = Truck(owner_id=3, name="King Souvlaki of Astoria", address="", city="New York", state="New York", zip_code="", cuisine="Sandwiches", price="$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())
    truck13 = Truck(owner_id=3, name="Patacon Pisao", address="", city="New York", state="New York", zip_code="", cuisine="Sandwiches", price="$$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())
    truck14 = Truck(owner_id=3, name="Poke Motion", address="", city="New York", state="New York", zip_code="", cuisine="Sushi", price="$$$$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())
    truck15 = Truck(owner_id=3, name="Boston Coffee Rescue", address="", city="Boston", state="Massachusetts", zip_code="", cuisine="Coffee", price="$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())

    truck16 = Truck(owner_id=4, name="Taco Calleteco", address="", city="Boston", state="Massachusetts", zip_code="", cuisine="Tacos/Burritos", price="$$$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())
    truck17 = Truck(owner_id=4, name="Trolley Dogs", address="", city="Boston", state="Massachusetts", zip_code="", cuisine="Sandwiches", price="$$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())
    truck18 = Truck(owner_id=4, name="Em's Ice Cream", address="", city="Denver", state="Colorado", zip_code="", cuisine="Ice Cream", price="$$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())
    truck19 = Truck(owner_id=4, name="Peaceful Creations", address="", city="Denver", state="Colorado", zip_code="", cuisine="Ice Cream", price="$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())
    truck20 = Truck(owner_id=4, name="Barefoot BBQ", address="", city="Denver", state="Colorado", zip_code="", cuisine="BBQ", price="$$", lat=1, long=1, created_at=datetime.now(), updated_at=datetime.now())
