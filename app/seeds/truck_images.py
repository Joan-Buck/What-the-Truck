from app.models import db, Truck
from datetime import datetime

from app.models.truck_image import TruckImage

def seed_truck_images():
    image1 = TruckImage(truck_id=1, image_url="https://www.foodtruckconnector.com/images/cities/San-Diego/Food-Trucks/Taco-Love/Taco-Love-Truck-1000x600.jpeg", created_at=datetime.now(), updated_at=datetime.now())
    image2 = TruckImage(truck_id=2, image_url="https://goop-img.com/wp-content/uploads/2016/12/Dogtown-Dog_2-resize.jpg", created_at=datetime.now(), updated_at=datetime.now())
    image3 = TruckImage(truck_id=3, image_url="https://goop-img.com/wp-content/uploads/2016/12/GuerrillaTacos3-1.jpg", created_at=datetime.now(), updated_at=datetime.now())
    image4 = TruckImage(truck_id=4, image_url="https://goop-img.com/wp-content/uploads/2016/12/Warbler-Coffee1-1.jpg", created_at=datetime.now(), updated_at=datetime.now())
    image5 = TruckImage(truck_id=5, image_url="https://cdn.vox-cdn.com/thumbor/EuL4Rj61vU6rLve2jzejG9wpb50=/0x0:2000x1334/1820x1213/filters:focal(840x507:1160x827):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59487203/Pratt_Wood_Shop_BBQ_20.0.7.jpg", created_at=datetime.now(), updated_at=datetime.now())

    image6 = TruckImage(truck_id=6, image_url="https://d3hbe0kmbam4a5.cloudfront.net/photos/4bcf993b-14b5-4a04-ba41-300058257425.jpg", created_at=datetime.now(), updated_at=datetime.now())
    image7 = TruckImage(truck_id=7, image_url="https://assets3.thrillist.com/v1/image/3062949/1584x1054/crop;webp=auto;jpeg_quality=60.jpg", created_at=datetime.now(), updated_at=datetime.now())
    image8 = TruckImage(truck_id=8, image_url="https://assets3.thrillist.com/v1/image/3062961/1584x1054/crop;webp=auto;jpeg_quality=60.jpg", created_at=datetime.now(), updated_at=datetime.now())
    image9 = TruckImage(truck_id=9, image_url="https://s3-media0.fl.yelpcdn.com/bphoto/yjf4x2iRNHlA5SDrjLUMDA/o.jpg", created_at=datetime.now(), updated_at=datetime.now())

    image10 = TruckImage(truck_id=10, image_url="https://indianfoodny.com/img/delicious/GrandBazaar.png", created_at=datetime.now(), updated_at=datetime.now())
    image11 = TruckImage(truck_id=11, image_url="https://infatuation.imgix.net/media/images/reviews/king-souvlaki-of-astoria/banners/1606243773.6297815.png", created_at=datetime.now(), updated_at=datetime.now())
    image12 = TruckImage(truck_id=12, image_url="https://nyfta.org/wp-content/uploads/2020/09/poke-motion-catering.png", created_at=datetime.now(), updated_at=datetime.now())
    image13 = TruckImage(truck_id=13, image_url="https://madeinpgh.com/wp-content/uploads/2021/04/image.jpeg", created_at=datetime.now(), updated_at=datetime.now())

    image14 = TruckImage(truck_id=14, image_url="https://static.wixstatic.com/media/c7e792_c024361b012c4b73a66ebdb52be2d224~mv2.png/v1/fill/w_1604,h_1040,al_c,usm_0.66_1.00_0.01,enc_auto/IMG_1456_edited_edited.png", created_at=datetime.now(), updated_at=datetime.now())
    image15 = TruckImage(truck_id=15, image_url="https://d3hbe0kmbam4a5.cloudfront.net/photos/ca89150d-49d0-4e26-89b6-d73513283253.jpg", created_at=datetime.now(), updated_at=datetime.now())
    image16 = TruckImage(truck_id=16, image_url="https://d3hbe0kmbam4a5.cloudfront.net/photos/83ef42b4-4101-4533-8954-aaf87dfad3c6.jpg", created_at=datetime.now(), updated_at=datetime.now())
    image17 = TruckImage(truck_id=17, image_url="https://d3hbe0kmbam4a5.cloudfront.net/photos/208cdeb8-23dd-49e9-a24c-a89f6a908cb4.jpeg", created_at=datetime.now(), updated_at=datetime.now())
    image18 = TruckImage(truck_id=18, image_url="https://d3hbe0kmbam4a5.cloudfront.net/photos/717c0b4c-70a2-49bb-8334-52e4f3857ab2.jpg", created_at=datetime.now(), updated_at=datetime.now())

    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)
    db.session.add(image6)
    db.session.add(image7)
    db.session.add(image8)
    db.session.add(image9)
    db.session.add(image10)
    db.session.add(image11)
    db.session.add(image12)
    db.session.add(image13)
    db.session.add(image14)
    db.session.add(image15)
    db.session.add(image16)
    db.session.add(image17)
    db.session.add(image18)


    db.session.commit()

def undo_truck_images():
    db.session.execute('TRUNCATE truck_images RESTART IDENTITY CASCADE;')
    db.session.commit()
