import React, { Component } from 'react';

export class SearchBar extends Component {
  handleInputChange = (event) => {
    const value = event.target.value;
    this.props.onQueryChange(event.target.value);
  };
  render() {
    return (
      <div>
        <input
          onChange={this.handleInputChange}
          type="search"
          placeholder="Beer search"
          value={this.props.query}
        />
      </div>
    );
  }
}

export default SearchBar;
