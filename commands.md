CREATE USER foodtruck_user WITH PASSWORD 'password' CREATEDB;
CREATE DATABASE foodtruck_app WITH OWNER foodtruck_user;

To Run Migration (any changes to models):
flask db migrate -m "message about migration"

To Update DB:
flask db upgrade

To seed DB:
flask seed all

To unseed DB:
flask seed undo


Heroku:
heroku container:push web -a foodtruck-aa
heroku container:release web -a foodtruck-aa
heroku container:release web -a foodtruck-aa
