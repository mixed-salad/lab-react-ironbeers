import React, { Component } from 'react';
import Header from './../components/Header';
import { loadSingleBeer } from './../services/beer-api';

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
        {beer && (
          <div className="single-beer">
            <img
              className="single-beer-image"
              src={beer.image_url}
              alt={beer.name}
            />
            <div>
              <div className="name-and-attenuation">
                <h3>{beer.name}</h3>
                <span>{beer.attenuation_level}</span>
              </div>
              <div className="tagline-and-firstBrewed">
                <p>{beer.tagline}</p>
                <small>{beer.first_brewed}</small>
              </div>
            </div>
            <p className="single-beer-description">{beer.description}</p>
            <small>{beer.contributed_by}</small>
          </div>
        )}
      </div>
    );
  }
}

export default SingleBeer;
