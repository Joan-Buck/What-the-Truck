from app.models import db, Review
from datetime import datetime

def seed_reviews():
    review1 = Review(user_id=1, truck_id=1, rating=5, content="San Diego has some of the best tacos and this place is at the top of that elite list. So good, and so many hot sauce options!",created_at=datetime.now(), updated_at=datetime.now())
    review2 = Review(user_id=2, truck_id=1, rating=2, content="Not as good as Tacos El Gordo.",created_at=datetime.now(), updated_at=datetime.now())
    review3 = Review(user_id=3, truck_id=1, rating=5, content="Everything was fresh and delicious! My friend and I decided to share every taco on the menu and not one of them disappointed. The fish taco was my favorite.",created_at=datetime.now(), updated_at=datetime.now())
    review4 = Review(user_id=4, truck_id=1, rating=4, content="Quick, fresh meal in a convenient location. Portions are a little small, but tasty.",created_at=datetime.now(), updated_at=datetime.now())

    review5 = Review(user_id=1, truck_id=2, rating=2, content="NOT vegan. Who even wants to eat hot dogs these days? Def not a food truck for LA.",created_at=datetime.now(), updated_at=datetime.now())
    review6 = Review(user_id=2, truck_id=2, rating=4, content="Really creative varieties and flavor combinations that make a regular hot dog interesting! Fun snack after a hike or day at the beach.",created_at=datetime.now(), updated_at=datetime.now())
    review7 = Review(user_id=3, truck_id=2, rating=5, content="My teenager loves Dogtown! It's the only place they'll eat anything slightly adventurous. We come here after her soccer games on the weekends.",created_at=datetime.now(), updated_at=datetime.now())
    review8 = Review(user_id=4, truck_id=2, rating=5, content="These hot dogs are beyond good! Love the weekly rotating menu and how creative these guys are. It's clear they love their work and their customers.",created_at=datetime.now(), updated_at=datetime.now())

    review9 = Review(user_id=1, truck_id=4, rating=3, content="Bitter and cold. Not really what I'm looking for in my coffee, I get enough of that from my boss.",created_at=datetime.now(), updated_at=datetime.now())
    review10 = Review(user_id=2, truck_id=4, rating=4, content="Decent coffee at a decent price for LA. It's on my walk to the gym so it makes sense to go here, otherwise I probably wouldn't.",created_at=datetime.now(), updated_at=datetime.now())

    review11 = Review(user_id=1, truck_id=5, rating=1, content="Worst food I've ever had. I would not recommend this food truck at all. Total disappointment!",created_at=datetime.now(), updated_at=datetime.now())
    review12 = Review(user_id=2, truck_id=5, rating=5, content="Amazing pulled pork! They had a variety of sauces, which made this Texan feel right at home in Seattle.",created_at=datetime.now(), updated_at=datetime.now())
    review13 = Review(user_id=3, truck_id=5, rating=5, content="The BEST BBQ in the PNW. If you love ribs, brisket, or pulled pork, do NOT miss this place. So good, a weekly work lunch spot for me.",created_at=datetime.now(), updated_at=datetime.now())
    review14 = Review(user_id=4, truck_id=5, rating=5, content="My dad was visiting from Kansas City and I brought him here for lunch. He said it was the best BBQ he's ever had and that is from a life long Kansas City BBQ eater.",created_at=datetime.now(), updated_at=datetime.now())

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)

    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)

    db.session.add(review11)
    db.session.add(review12)
    db.session.add(review13)
    db.session.add(review14)

    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
