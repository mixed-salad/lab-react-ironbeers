import React from 'react';

const BeerDetails = (props) => {
  const beer = props.beer;
  return (
    <div className="single-beer">
      <img className="single-beer-image" src={beer.image_url} alt={beer.name} />
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
  );
};

export default BeerDetails;
