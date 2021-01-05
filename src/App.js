import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/Login/SignUp/SignUp';
import Login from './Components/Login/Login/Login';
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import HuntPage from './Components/Bookings/HuntPage/HuntPage';
import HomeDetails from './Components/Home/HomeDetails/HomeDetails';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import List from './Components/Bookings/List/List';
import MyRent from './Components/Bookings/MyRent/MyRent';
import Sidebar from './Components/Bookings/Sidebar/Sidebar';
import AddRent from './Components/Bookings/AddRent/AddRent';

export const UserContext= createContext();

function App() {
  const [loggedInUser, setLoggedInUser]= useState({
    name: '',
    email: '',
    password:'',
  });
  const [rentHouse, setRentHouse] = useState({});

  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, rentHouse, setRentHouse]}>

    <Router>
      <Switch>
        
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <PrivateRoute path="/about/:_id">
          <HomeDetails/>
        </PrivateRoute>
        <Route path="/huntPage">
          <HuntPage />
        </Route>
        {/* <PrivateRoute path="/about">
          <HomeDetails/>
        </PrivateRoute> */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>

  );
}

export default App;