import TYPES from "./loadingTypes";

export function setLoading(loading) {
  return {
    type: TYPES.SET_LOADING,
    payload: loading
  };
}
