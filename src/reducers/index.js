import { combineReducers } from 'redux';

import fetchWeatherReducer from './fetchWeatherReducer';

const rootReducer = combineReducers({
  weather: fetchWeatherReducer
});

export default rootReducer;
