import axios from 'axios';

export const fetchListFilms = async () => {
  const BASE_URL = 'https://api.themoviedb.org/';

  const API_KEY = '21dd3197032ef657b681b90da4af9cac';
  const ENDPOINT = '/trending/movie/week';
  const url = `${BASE_URL}/3${ENDPOINT}?api_key=${API_KEY}`;

  const data = await axios.get(url);
  console.log(data.data.results);
  return data;
};
