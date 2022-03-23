# What The Truck

What The Truck is inspired by Yelp, an app that allows users to explore businesses and leave ratings and reviews for others to see. What The Truck allows users to explore food trucks, add new food trucks as owners, and rate/review food trucks they visit. The purpose is to share crowdsourced information, so people deciding what to have for dinner can make an informed choice.

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

### My Food Trucks Page
Upon logging in, a user can explore all food trucks or go to their food trucks page. The My Food Trucks page lists all food trucks a user owns with overview information about the truck, from here they can click on a specific food truck card to see that truck's details and reviews.

### Create Food Truck Form
From the My Food Trucks page a user can click the "+ Add a new food truck" button to open a modal and create a new food truck for customers to enjoy.

### All Food Trucks Page
The All Food Trucks page renders food truck overview cards for each food truck, regardless of owner. From here, the user can click a food truck card to go to that food truck's detail page.

### Food Truck Detail Page
Each food truck has a detail page that renders all information about the food truck, as well as its overall average rating, and all associated reviews and their ratings. If a user does not own the food truck, they have the option to submit a review, or edit and delete a previously written review. Users can only submit one review per food truck. 
