import axios from "axios";
import TYPES from "./userTypes";
import { setError, hideError } from "../error/errorActions";
import { setLoading } from "../loading/loadingActions";

function loadUser(userData) {
  return {
    type: TYPES.GET_USER_REQUEST,
    payload: userData,
    error: null
  };
}

export const getUsers = (url) => {
  return async function (dispatch) {
    dispatch(hideError());
    dispatch(setLoading(true));
    setTimeout(async () => {
      try {
        let response = (await axios.get(url)).data;
        dispatch(setLoading(false));
        dispatch(loadUser(response));
      } catch (error) {
        dispatch(setLoading(false));
        dispatch(loadUser([]));
        dispatch(setError(error));
      }
    }, 2000);
  };
};
