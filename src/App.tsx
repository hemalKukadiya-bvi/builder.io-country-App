import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import './App.css';
import Details from './Components/Details';
import Home  from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/details" component={Details}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
