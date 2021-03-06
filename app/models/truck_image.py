from turtle import back
from .db import db
from datetime import datetime

class TruckImage(db.Model):
    __tablename__ = 'truck_images'

    id = db.Column(db.Integer, primary_key=True)
    truck_id = db.Column(db.Integer, db.ForeignKey("trucks.id"))
    image_url = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now(), onupdate=datetime.now())

    truck = db.relationship("Truck", back_populates="images")

    def to_dict(self):
        return {
            "id": self.id,
            "truckId": self.truck.id,
            "imageURL": self.image_url,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at,
        }
