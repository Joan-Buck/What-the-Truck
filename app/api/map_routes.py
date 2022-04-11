from flask import Blueprint
from flask_googlemaps import GoogleMaps
from app.config import Config

map_routes = Blueprint('maps', __name__)


@map_routes.route('/key', methods=["POST"])
def get_key():
    return {"key": Config.FLASK_GOOGLEMAPS_KEY}
