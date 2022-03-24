# What The Truck

[What The Truck](https://foodtruck-aa.herokuapp.com/) is inspired by Yelp, an app that allows users to explore businesses and leave ratings and reviews for others to see. What The Truck allows users to explore food trucks, add new food trucks as owners, and rate/review food trucks they visit. The purpose is to share crowdsourced information about food trucks local to a user.


## Features
- Sign up as a new user, log in as a returning user, or log in as a demo user
- Food Trucks
  - Create a food truck
  - Read all food trucks in the app
  - Read all food trucks the current user owns
  - Edit a food truck the current user owns
  - Delete a food truck the current user owns

- Reviews/Ratings
  - Create a review and rating for a food truck
  - Read all reviews and ratings, as well as average rating for a food truck
  - Edit a review and rating the current user created
  - Delete a review and rating the current user created 

## Features Coming Soon
- Search
- Maps integration
- User ability to update any food truck's location on the map

## Technologies Used
- Front End:
  - React
  - Redux
- Back End:
  - Python
  - PostgreSQL
  - Flask
  - SQLAlchemy
- Deployment:
  - Docker

## Site Preview
### Splash Page
The splash page gives both logged out and logged in users a teaser of the site, but logged out users are not able to access any of the site's core features until they sign up or log in. 
<img width="1411" alt="Screen Shot 2022-03-23 at 8 29 36 PM" src="https://user-images.githubusercontent.com/90011287/159830335-b5cce62b-d9ac-4919-8b4c-dd9945379757.png">


### My Food Trucks Page
Upon logging in, a user can explore all food trucks or go to their food trucks page. The My Food Trucks page lists all food trucks a user owns with overview information about the truck, from here they can click on a specific food truck card to see that truck's details and reviews.
<img width="1398" alt="Screen Shot 2022-03-23 at 8 33 20 PM" src="https://user-images.githubusercontent.com/90011287/159830475-7250b8eb-125a-4f48-a29f-647e2cecf3db.png">


### Create Food Truck Form
From the My Food Trucks page a user can click the "+ Add a new food truck" button to open a modal and create a new food truck for customers to enjoy.
<img width="1399" alt="Screen Shot 2022-03-23 at 8 34 05 PM" src="https://user-images.githubusercontent.com/90011287/159830545-a368f0de-b7b4-4e2e-a0a1-075c9f184b19.png">


### All Food Trucks Page
The All Food Trucks page renders food truck overview cards for each food truck, regardless of owner. From here, the user can click a food truck card to go to that food truck's detail page.
<img width="1402" alt="Screen Shot 2022-03-23 at 8 35 00 PM" src="https://user-images.githubusercontent.com/90011287/159830667-c5a37a66-e40e-4aa4-a810-7d3539d76bd8.png">


### Food Truck Detail Page
Each food truck has a detail page that renders all information about the food truck, as well as its overall average rating, and all associated reviews and their ratings. If a user does not own the food truck, they have the option to submit a review or edit a review via a modal form, as well as delete a previously written review. Users can only submit one review per food truck. 
<img width="1400" alt="Screen Shot 2022-03-23 at 8 36 12 PM" src="https://user-images.githubusercontent.com/90011287/159830808-90403991-561b-40ec-ac6a-78df6dbd7263.png">

