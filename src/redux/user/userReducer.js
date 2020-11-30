import TYPES from "./userTypes";

const initialState = {
  userData: []
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_USER_REQUEST:
      return {
        ...state,
        userData: action.payload
      };
    default:
      return state;
  }
}
