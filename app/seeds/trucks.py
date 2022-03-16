from app.models import db, Truck
from datetime import datetime

def seed_trucks():
    truck1 = Truck(owner_id=1, name="Taco Love", address="4637 Market St", city="San Diego", state="California", zip_code="92102", cuisine="Tacos/Burritos", price="$$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())
    truck2 = Truck(owner_id=1, name="Dogtown Dogs", address="2020 Main St", city="Los Angeles", state="California", zip_code="90014", cuisine="Sandwiches", price="$$$$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())
    truck3 = Truck(owner_id=1, name="Guerrilla Tacos", address="2000 E 7th St,", city="Los Angeles", state="California", zip_code="90021", cuisine="Tacos/Burritos", price="$$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())
    truck4 = Truck(owner_id=1, name="Nitro Coffee", address="15 Santa Monica Blvd", city="Santa Monica", state="California", zip_code="90404", cuisine="Coffee", price="$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())
    truck5 = Truck(owner_id=1, name="Wood Shop BBQ", address="2513 S Jackson St", city="Seattle", state="Washington", zip_code="98144", cuisine="BBQ", price="$$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())

    truck6 = Truck(owner_id=2, name="Yeti Dogs", address="66 Bell Street", city="Seattle", state="Washington", zip_code="98121", cuisine="Sandwiches", price="$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())
    truck7 = Truck(owner_id=2, name="Uncle John's BBQ", address="4417 Seahawks Way", city="Seattle", state="Washington", zip_code="98126", cuisine="BBQ", price="$$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())
    truck8 = Truck(owner_id=2, name="Cold Cookie Co.", address="2512 Rio Grande St", city="Austin", state="Texas", zip_code="78705", cuisine="Ice Cream", price="$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())
    truck9 = Truck(owner_id=2, name="Hey Cupcake!", address="5700 Menchaca Rd", city="Austin", state="Texas", zip_code="78745", cuisine="Dessert", price="$$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())
    truck10 = Truck(owner_id=2, name="Dawa Sushi", address="5000 Burnet Rd", city="Austin", state="Texas", zip_code="78756", cuisine="Sushi", price="$$$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())

    truck11 = Truck(owner_id=3, name="Mysttik Masaala", address="", city="New York", state="New York", zip_code="", cuisine="Indian", price="$$$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())
    truck12 = Truck(owner_id=3, name="King Souvlaki of Astoria", address="", city="New York", state="New York", zip_code="", cuisine="Sandwiches", price="$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())
    truck13 = Truck(owner_id=3, name="Patacon Pisao", address="", city="New York", state="New York", zip_code="", cuisine="Sandwiches", price="$$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())
    truck14 = Truck(owner_id=3, name="Poke Motion", address="", city="New York", state="New York", zip_code="", cuisine="Sushi", price="$$$$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())
    truck15 = Truck(owner_id=3, name="Boston Coffee Rescue", address="", city="Boston", state="Massachusetts", zip_code="", cuisine="Coffee", price="$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())

    truck16 = Truck(owner_id=4, name="Taco Calleteco", address="", city="Boston", state="Massachusetts", zip_code="", cuisine="Tacos/Burritos", price="$$$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())
    truck17 = Truck(owner_id=4, name="Trolley Dogs", address="", city="Boston", state="Massachusetts", zip_code="", cuisine="Sandwiches", price="$$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())
    truck18 = Truck(owner_id=4, name="Em's Ice Cream", address="", city="Denver", state="Colorado", zip_code="", cuisine="Ice Cream", price="$$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())
    truck19 = Truck(owner_id=4, name="Peaceful Creations", address="", city="Denver", state="Colorado", zip_code="", cuisine="Ice Cream", price="$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())
    truck20 = Truck(owner_id=4, name="Barefoot BBQ", address="", city="Denver", state="Colorado", zip_code="", cuisine="BBQ", price="$$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())

    db.session.add(truck1)
    db.session.add(truck2)
    db.session.add(truck3)
    db.session.add(truck4)
    db.session.add(truck5)
    db.session.add(truck6)
    db.session.add(truck7)
    db.session.add(truck8)
    db.session.add(truck9)
    db.session.add(truck10)
    db.session.add(truck11)
    db.session.add(truck12)
    db.session.add(truck13)
    db.session.add(truck14)
    db.session.add(truck15)
    db.session.add(truck16)
    db.session.add(truck17)
    db.session.add(truck18)
    db.session.add(truck19)
    db.session.add(truck20)

    db.session.commit()

def undo_trucks():
    db.session.execute('TRUNCATE trucks RESTART IDENTITY CASCADE;')
    db.session.commit()
