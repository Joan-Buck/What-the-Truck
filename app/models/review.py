from .db import db
from datetime import datetime

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    truck_id = db.Column(db.Integer, db.ForeignKey("trucks.id"))
    rating = db.Column(db.Integer, nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now(), onupdate=datetime.now())

    user = db.relationship("User", back_populates="reviews")
    truck = db.relationship("Truck", back_populates="reviews")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "username": self.user.username,
            "truckId": self.truck_id,
            "rating": self.rating,
            "content": self.content,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at
        }
