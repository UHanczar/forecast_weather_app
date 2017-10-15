import { FETCH_WEATHER } from '../actions/actions';

const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return [...state, action.payload.data];
    default:
      return state;
  }
};