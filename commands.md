CREATE USER foodtruck_user WITH PASSWORD 'password' CREATEDB;
CREATE DATABASE foodtruck_app WITH OWNER foodtruck_user;

To Run Migration (any changes to models):
flask db migrate -m "message about migration"

To Update DB:
flask db upgrade

To seed DB:
flask db seed all

To unseed DB:
