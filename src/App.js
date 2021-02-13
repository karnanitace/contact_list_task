import React from "react";
import './App.css';
import { Provider } from "react-redux";
import store from "./store";

import Favourites from "./components/Favourites";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>

          <div className="app">
            <Switch>
              
              <Route path="/favourite">
                <Favourites />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>

          </div>
      </Router>
    </Provider>
  );
}

export default App;
