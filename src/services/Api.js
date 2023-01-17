import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '21dd3197032ef657b681b90da4af9cac';

export const fetchListPopularFilms = async () => {
  const ENDPOINT = '/trending/movie/week';
  const url = `${BASE_URL}/3${ENDPOINT}?api_key=${API_KEY}`;

  const data = await axios.get(url);
  return data;
};

export const fetchSearchFilms = async query => {
  const ENDPOINT = '/search/movie';
  const url = `${BASE_URL}/3${ENDPOINT}?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  const data = await axios.get(url);
  return data;
};

export const fetchFilmById = async id => {
  const ENDPOINT = '/movie';
  const url = `${BASE_URL}3${ENDPOINT}/${id}?api_key=${API_KEY}&language=en-US`;

  const data = await axios.get(url);
  return data;
};

export const fetchCasts = async id => {
  const ENDPOINT = '/movie';
  const url = `${BASE_URL}3${ENDPOINT}/${id}/credits?api_key=${API_KEY}&language=en-US`;

  const data = await axios.get(url);
  return data;
};

export const fetchReviews = async id => {
  const ENDPOINT = '/movie';
  const url = `${BASE_URL}3${ENDPOINT}/${id}/reviews?api_key=${API_KEY}&language=en-US`;

  const data = await axios.get(url);
  return data;
};
