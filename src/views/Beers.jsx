import React, { Component } from 'react';
import Header from './../components/Header';

class Beers extends Component {
  state = {
    beers: [],
  };
  render() {
    return (
      <div>
        <Header></Header>
        <h1>List of Beers</h1>
      </div>
    );
  }
}

export default Beers;
