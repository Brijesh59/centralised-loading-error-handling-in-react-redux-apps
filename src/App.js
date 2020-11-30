import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/actions";

export default function App() {
  const users = useSelector((state) => state.user.userData);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();
  function getUsersError() {
    dispatch(getUsers("https://love-calculator.p.rapidapi.com/getPercentage"));
  }
  function getUsersSuccess() {
    dispatch(getUsers("https://jsonplaceholder.typicode.com/users"));
  }
  return (
    <div>
      <button onClick={getUsersSuccess}>GET USERS SUCCESS</button>
      <button onClick={getUsersError}>GET USERS Error</button> <br />
      {isLoading && <span>Loading ...</span>}
      <pre>{users.length > 0 && JSON.stringify(users, ["name"], 4)}</pre>
    </div>
  );
}
