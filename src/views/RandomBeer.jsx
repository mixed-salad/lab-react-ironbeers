import React, { Component } from 'react';
import Header from './../components/Header';
import { randomBeer } from './../services/beer-api';
import BeerDetails from './../components/BeerDetails';

class SingleBeer extends Component {
  state = {
    randomBeer: null,
  };

  componentDidMount() {
    this.loadRandomBeer();
  }

  componentDidUpdate(previousProps) {
    if (previousProps.match.params.id !== this.props.match.params.id) {
      this.loadRandomBeer();
    }
  }

  async loadRandomBeer() {
    const beer = await randomBeer();
    this.setState({
      randomBeer: beer,
    });
  }

  render() {
    const beer = this.state.randomBeer;

    return (
      <div>
        <Header />
        {beer && <BeerDetails beer={beer} />}
      </div>
    );
  }
}

export default SingleBeer;
