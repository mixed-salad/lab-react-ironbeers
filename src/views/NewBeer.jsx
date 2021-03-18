import React, { Component } from 'react';
import { newBeer } from '../services/beer-api';
import Header from './../components/Header';

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmission = async (event) => {
    event.preventDefault();
    const body = this.state;
    const response = await newBeer(body);
  };

  render() {
    return (
      <div>
        <Header />
        <h1>New Beer</h1>
        <form onSubmit={this.handleSubmission}>
          <div className="form-input">
            <label htmlFor="input-name">Name</label>
            <input
              onChange={this.handleInputChange}
              id="input-name"
              name="name"
              type="text"
            />
          </div>
          <div className="form-input">
            <label htmlFor="input-tagline">Tagline</label>
            <input
              onChange={this.handleInputChange}
              id="input-tagline"
              name="tagline"
              type="text"
            />
          </div>
          <div className="form-input">
            <label htmlFor="input-description">Description</label>
            <textarea
              onChange={this.handleInputChange}
              id="input-description"
              name="description"
              type="text"
            ></textarea>
          </div>
          <div className="form-input">
            <label htmlFor="input-description">First Brewed</label>
            <input
              onChange={this.handleInputChange}
              id="input-first-brewed"
              name="first_brewed"
              type="text"
            />
          </div>
          <div className="form-input">
            <label htmlFor="input-attenuation-level">Attenuation Level</label>
            <input
              onChange={this.handleInputChange}
              id="input-attenuation-level"
              name="attenuation_level"
              type="number"
            />
          </div>
          <div className="form-input">
            <label htmlFor="input-brewers-tips">Brewers Tips</label>
            <input
              onChange={this.handleInputChange}
              id="input-brewers-tips"
              name="brewers_tips"
              type="text"
            />
          </div>

          <button>ADD NEW</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
