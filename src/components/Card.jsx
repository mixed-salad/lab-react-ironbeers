import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div>
      <Link to={props.path}>
        <img src={props.img} alt={props.title} />
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, rem!
        </p>
      </Link>
    </div>
  );
};

export default Card;
