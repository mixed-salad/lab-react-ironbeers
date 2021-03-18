import React, { Component } from 'react';
import Header from './../components/Header';
import { listBeers } from './../services/beer-api';
import { Link } from 'react-router-dom';

class Beers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    this.loadBeerList();
  }

  async loadBeerList() {
    const beers = await listBeers();
    this.setState({
      beers: beers,
    });
  }
  render() {
    return (
      <div>
        <Header></Header>
        <h1>List of Beers</h1>
        <div className="list-body">
          {this.state.beers.map((beer) => (
            <Link to={`/beer/${beer._id}`} key={beer._id} className="beer-item">
              <div>
                <img
                  className="beer-img"
                  src={beer.image_url}
                  alt={beer.name}
                />
              </div>
              <div className="beer-description">
                <h3>{beer.name}</h3>
                <p className="beer-tagline">{beer.tagline}</p>
                <p className="beer-created-by">
                  Created by: {beer.contributed_by}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Beers;
