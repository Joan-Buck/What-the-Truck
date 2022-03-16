from werkzeug.test import Client
from app import app

def test_api():
    c = Client(app)
    response = c.get("/api/food-trucks/")
    assert response.status_code == 200
    assert "foodTrucks" in response.json
    for item in response.json["foodTrucks"]:
        assert "city" in item
