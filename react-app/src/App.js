import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SignUpForm from './components/auth/SignUpForm/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Home from './components/Home/Home';
import FoodTruckListing from './components/FoodTrucks/FoodTrucks';
import MyFoodTruckListing from './components/FoodTrucks/MyFoodTrucks';
import FoodTruckDetail from './components/FoodTrucks/FoodTruckDetail';
import ErrorPage from './components/Error/ErrorPage';
import { authenticate } from './store/session';
import LoginRequired from './components/auth/LoginRequired';
import Search from './components/Search/Search';

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
        <Route path='/login-required' exact={true}>
          <LoginRequired />
        </Route>
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
        <ProtectedRoute path='/search' exact={true}>
          <Search />
        </ProtectedRoute>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
