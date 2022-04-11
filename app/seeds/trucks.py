from app.models import db, Truck
from datetime import datetime

# lat: 40.17012,
#   lng: -105.13876

def seed_trucks():
    truck1 = Truck(owner_id=1, name="Taco Love", address="4637 Market St", city="San Diego", state="California", zip_code="92102", cuisine="Tacos/Burritos", price="$$", lat=31.7110774, long=-117.0949059, created_at=datetime.now(), updated_at=datetime.now())
    truck2 = Truck(owner_id=1, name="Dogtown Dogs", address="734 S Los Angeles St", city="Los Angeles", state="California", zip_code="90014", cuisine="Sandwiches", price="$$$$", lat=34.0425, long=-118.2513, created_at=datetime.now(), updated_at=datetime.now())
    truck3 = Truck(owner_id=1, name="Guerrilla Tacos", address="2000 E 7th St,", city="Los Angeles", state="California", zip_code="90021", cuisine="Tacos/Burritos", price="$$", lat=34.034320, long=-118.232140, created_at=datetime.now(), updated_at=datetime.now())
    truck4 = Truck(owner_id=1, name="Nitro Coffee", address="15 Santa Monica Blvd", city="Santa Monica", state="California", zip_code="90404", cuisine="Coffee", price="$", lat=34.014160, long=-118.498040, created_at=datetime.now(), updated_at=datetime.now())
    truck5 = Truck(owner_id=1, name="Wood Shop BBQ", address="2513 S Jackson St", city="Seattle", state="Washington", zip_code="98144", cuisine="BBQ", price="$$", lat=47.599060, long=-122.299140, created_at=datetime.now(), updated_at=datetime.now())

    truck6 = Truck(owner_id=2, name="Yeti Dogs", address="66 Bell Street", city="Seattle", state="Washington", zip_code="98121", cuisine="Sandwiches", price="$", lat=47.612690, long=-122.347900, created_at=datetime.now(), updated_at=datetime.now())
    # truck7 = Truck(owner_id=2, name="Uncle John's BBQ", address="4417 Seahawks Way", city="Seattle", state="Washington", zip_code="98126", cuisine="BBQ", price="$$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())
    truck8 = Truck(owner_id=2, name="Cold Cookie Co.", address="2512 Rio Grande St", city="Austin", state="Texas", zip_code="78705", cuisine="Ice Cream", price="$", lat=30.290970729236854, long=-97.74457029563469, created_at=datetime.now(), updated_at=datetime.now())
    truck9 = Truck(owner_id=2, name="Hey Cupcake!", address="5700 Menchaca Rd", city="Austin", state="Texas", zip_code="78745", cuisine="Dessert", price="$$", lat=30.21599076497917, long=-97.80012936497467, created_at=datetime.now(), updated_at=datetime.now())
    truck10 = Truck(owner_id=2, name="Dawa Sushi", address="5000 Burnet Rd", city="Austin", state="Texas", zip_code="78756", cuisine="Sushi", price="$$$", lat=30.321879559398727, long=-97.7384649580673, created_at=datetime.now(), updated_at=datetime.now())

    truck11 = Truck(owner_id=3, name="Mysttik Masaala", address="399 Park Ave", city="New York", state="New York", zip_code="10022", cuisine="Indian", price="$$$", lat=40.760061736945886, long=-73.96941901663354, created_at=datetime.now(), updated_at=datetime.now())
    truck12 = Truck(owner_id=3, name="King Souvlaki of Astoria", address="30 31st St", city="New York", state="New York", zip_code="11106", cuisine="Sandwiches", price="$", lat=40.765090937735415, long=-73.9235053651495, created_at=datetime.now(), updated_at=datetime.now())
    # truck13 = Truck(owner_id=3, name="Patacon Pisao", address="139 Essex St", city="New York", state="New York", zip_code="10002", cuisine="Sandwiches", price="$$", lat=None, long=None, created_at=datetime.now(), updated_at=datetime.now())
    truck14 = Truck(owner_id=3, name="Poke Motion", address="1152 Broadway Ave", city="New York", state="New York", zip_code="10022", cuisine="Sushi", price="$$$$", lat=40.74514709871435, long=-73.98872765259263, created_at=datetime.now(), updated_at=datetime.now())
    truck15 = Truck(owner_id=3, name="Boston Coffee Rescue", address="8127 Main St", city="Boston", state="Massachusetts", zip_code="02199", cuisine="Coffee", price="$", lat=42.37953528980907, long=-71.06715916873426, created_at=datetime.now(), updated_at=datetime.now())

    truck16 = Truck(owner_id=4, name="Taco Calleteco", address="1 City Hall Square", city="Boston", state="Massachusetts", zip_code="02201", cuisine="Tacos/Burritos", price="$$$", lat=42.360813953788856, long= -71.05681373752188, created_at=datetime.now(), updated_at=datetime.now())
    truck17 = Truck(owner_id=4, name="Trolley Dogs", address="1 City Hall Square", city="Boston", state="Massachusetts", zip_code="02201", cuisine="Sandwiches", price="$$", lat=42.360813953788856, long= -71.05681373752188, created_at=datetime.now(), updated_at=datetime.now())
    truck18 = Truck(owner_id=4, name="Em's Ice Cream", address="2829 Fairfax St", city="Denver", state="Colorado", zip_code="80207", cuisine="Ice Cream", price="$$", lat=39.75769314439567, long=-104.92701291604337, created_at=datetime.now(), updated_at=datetime.now())
    truck19 = Truck(owner_id=4, name="Peaceful Creations", address="5160 Main St", city="Denver", state="Colorado", zip_code="80207", cuisine="Ice Cream", price="$", lat=39.78216242843816, long=-104.89208539908391, created_at=datetime.now(), updated_at=datetime.now())
    truck20 = Truck(owner_id=4, name="Barefoot BBQ", address="701 12th St", city="Golden", state="Colorado", zip_code="80401", cuisine="BBQ", price="$$", lat=39.75635804630244, long=-105.21923913879182, created_at=datetime.now(), updated_at=datetime.now())

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
