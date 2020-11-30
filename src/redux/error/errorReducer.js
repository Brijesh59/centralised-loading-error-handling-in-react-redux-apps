import TYPES from "./errorTypes";

const initialState = {
  error: null,
  isOpen: false
};

export default function errorReducer(state = initialState, action) {
  const { error } = action;

  if (error) {
    return {
      error: error,
      isOpen: true
    };
  } else if (action.type === TYPES.HIDE_ERROR) {
    return {
      error: null,
      isOpen: false
    };
  }

  return state;
}
