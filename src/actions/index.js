import {
  SQUARE,
  SQUARE_ROOT,
  RESET,
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
