import { buildQueries } from '@testing-library/dom';
import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Beers from './views/Beers';
import NewBeer from './views/NewBeer';
import SingleBeer from './views/SingleBeer';
import Home from './views/Home';
import RandomBeer from './views/RandomBeer';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/beers" component={Beers} exact />
          <Route path="/beer/:id" component={SingleBeer} exact />
          <Route path="/random-beer" component={RandomBeer} exact />
          <Route path="/new-beer" component={NewBeer} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
