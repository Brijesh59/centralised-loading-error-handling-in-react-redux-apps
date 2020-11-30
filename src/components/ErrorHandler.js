import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ErrorNotification = (props) => {
  const isOpen = useSelector((state) => state.error.isOpen);
  const error = useSelector((state) => state.error.error);

  const dispatch = useDispatch();

  function handleClose() {
    dispatch({ type: "HIDE_ERROR" });
  }

  return (
    <>
      {isOpen && error && (
        <div>
          <button onClick={handleClose}>Close Error</button>
          <br />
          <span>{JSON.stringify(error)}</span>
        </div>
      )}
    </>
  );
};

export default ErrorNotification;
