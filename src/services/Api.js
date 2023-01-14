import axios from 'axios';

export const fetchListPopularFilms = async () => {
  const BASE_URL = 'https://api.themoviedb.org/';

  const API_KEY = '21dd3197032ef657b681b90da4af9cac';
  const ENDPOINT = '/trending/movie/week';
  const url = `${BASE_URL}/3${ENDPOINT}?api_key=${API_KEY}`;

  const data = await axios.get(url);
  // console.log(data.data.results);
  return data;
};

export const fetchSearchFilms = async query => {
  const BASE_URL = 'https://api.themoviedb.org/';

  const API_KEY = '21dd3197032ef657b681b90da4af9cac';
  const ENDPOINT = '/search/movie';
  const url = `${BASE_URL}/3${ENDPOINT}?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  const data = await axios.get(url);
  console.log(data);
  console.log(data.data);
  return data;
};
