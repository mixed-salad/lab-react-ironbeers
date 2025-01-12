import React, { Component } from 'react';
import Header from './../components/Header';
import { loadSingleBeer } from './../services/beer-api';
import BeerDetails from './../components/BeerDetails';

class SingleBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    this.loadBeer();
  }

  componentDidUpdate(previousProps) {
    if (previousProps.match.params.id !== this.props.match.params.id) {
      this.loadBeer();
    }
  }
  async loadBeer() {
    const id = this.props.match.params.id;
    const beer = await loadSingleBeer(id);
    this.setState({
      beer: beer,
    });
  }

  render() {
    const beer = this.state.beer;

    return (
      <div>
        <Header />
        {beer && <BeerDetails beer={beer} />}
      </div>
    );
  }
}

export default SingleBeer;
