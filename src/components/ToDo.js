import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

function ToDo({ text, id }) {
  const dispatch = useDispatch();
  const onDelClick = () => {
    dispatch(actionCreators.deleteToDo(id));
  };
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onDelClick}>DEL</button>
    </li>
  );
}

export default ToDo;
