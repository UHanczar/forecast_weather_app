import axios from 'axios';

import { FETCH_WEATHER } from './actions';
const API_KEY = '10398681c88c43794ad6ed5b9366ca29';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?';

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}q=${city}&appid=${API_KEY}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
};
