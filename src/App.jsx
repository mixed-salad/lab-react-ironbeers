import { buildQueries } from '@testing-library/dom';
import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Beers from './views/Beers';
import NewBeer from './views/New-beer';
import SingleBeer from './views/Single-beer';
import Card from './components/Card';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Card title="All Beers" img="images/beers.png" path="/beers" />
        <Card
          title="Random Beer"
          img="images/random-beer.png"
          path="/random-beer"
        />
        <Card title="New Beer" img="images/new-beer.png" path="/new-beer" />

        <Switch>
          <Route path="/beers" component={Beers} exact />
          <Route path="/random-beer" component={SingleBeer} exact />
          <Route path="/new-beer" component={NewBeer} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
