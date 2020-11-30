import TYPES from "./loadingTypes";

const initialState = {
  isLoading: false
};

export default function loadingReducer(state = initialState, action) {
  if (action.type === TYPES.SET_LOADING) {
    return {
      isLoading: action.payload
    };
  }
  return state;
}
