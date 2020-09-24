import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./components/firebaseConfige/firebase.config";
import NotFound from "./components/Notfound/Notfound";
import Header from "./components/Header/Header";
import Destination from "./components/Destination/Destination";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Map } from "@material-ui/icons";
import Auth from "./components/Auth/Auth";
import Booking from "./components/Booking/Booking";

export const userContext = createContext();
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

function App() {
  const [showArea, setShowArea] = useState({
    id: 1,
    title: "Cox's Bazar",
    description:
      "Why Cox's Bazar is a Great Tourist Attraction Cox's Bazar Review. Cox's Bazar is famous for its long natural sandy sea beach. ... Cox's Bazar has the world's largest unbroken sea beach which stretches more than 120 km. The entire beach is a stretch of golden sandy sea beach which is reachable by motorbike.",
    img:
      "https://images.unsplash.com/photo-1544550581-1bcabf842b77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("user");

  return (
    <userContext.Provider
      value={[showArea, setShowArea, loggedIn, setLoggedIn, name, setName]}
    >
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/booking">
            <Booking></Booking>
          </Route>

          <Route exact path="/booking/destination">
            <Destination></Destination>
          </Route>

          <PrivateRoute path="/map">
            <Map></Map>
          </PrivateRoute>

          <Route exact path="/auth">
            <Auth></Auth>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
