import React from 'react';
import Card from './../components/Card';

const Home = () => {
  return (
    <div>
      <Card title="All Beers" img="images/beers.png" path="/beers" />
      <Card
        title="Random Beer"
        img="images/random-beer.png"
        path="/random-beer"
      />
      <Card title="New Beer" img="images/new-beer.png" path="/new-beer" />
    </div>
  );
};

export default Home;
