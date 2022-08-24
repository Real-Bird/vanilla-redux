import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const toDos = useSelector((state) => state);
  const { id } = useParams();
  const toDo = toDos.find((todo) => todo.id === +id);
  const createdAt = new Date(toDo.id).toDateString().toLocaleUpperCase();
  return (
    <>
      <h1>Detail</h1>
      <div>{toDo.text}</div>
      <div>CreatedAt : {createdAt}</div>
    </>
  );
}

export default Detail;
