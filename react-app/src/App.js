import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SignUpForm from './components/auth/SignUpForm/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Home from './components/Home/Home';
import FoodTruckListing from './components/FoodTrucks/FoodTrucks';
import MyFoodTruckListing from './components/FoodTrucks/MyFoodTrucks';
import FoodTruckDetail from './components/FoodTrucks/FoodTruckDetail';
import ErrorPage from './components/Error/ErrorPage';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true}>
          <Home />
        </Route>
        <ProtectedRoute path='/food-trucks' exact={true}>
          <FoodTruckListing />
        </ProtectedRoute>
        <ProtectedRoute path='/food-trucks/:foodTruckId' exact={true}>
          <FoodTruckDetail />
        </ProtectedRoute>
        <ProtectedRoute path='/my-food-trucks' exact={true}>
          <MyFoodTruckListing />
        </ProtectedRoute>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
