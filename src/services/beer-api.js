import axios from 'axios';

export const listBeers = async () => {
  const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
  console.log(response);
  return response.data;
};

export const loadSingleBeer = async (id) => {
  const response = await axios.get(
    `https://ih-beers-api2.herokuapp.com/beers/${id}`
  );
  return response.data;
};

export const randomBeer = async () => {
  const response = await axios.get(
    `https://ih-beers-api2.herokuapp.com/beers/random`
  );
  return response.data;
};
