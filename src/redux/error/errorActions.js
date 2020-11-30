import TYPES from "./errorTypes";

export function setError(error) {
  return {
    type: TYPES.SET_ERROR,
    error: error
  };
}

export function hideError() {
  return {
    type: TYPES.HIDE_ERROR
  };
}
