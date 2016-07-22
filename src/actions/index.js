import axios from 'axios'

import {
  SQUARE,
  SQUARE_ROOT,
  RESET,
  MAKE_API_CALL,
} from './types';

export function square() {
  return {
    type: SQUARE
  };
}

export function squareRoot() {
  return {
    type: SQUARE_ROOT
  };
}

export function reset() {
  return {
    type: RESET
  };
}

const URL = 'http://api.icndb.com/jokes/random'

export function makeApiCall() {
  const request = axios.get(URL);

  return {
    type: MAKE_API_CALL,
    payload: request
  }
}
