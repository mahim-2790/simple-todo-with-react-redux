import { loaded } from "../actions";

const fetchTodoS = async (dispatch) => {
  const response = await fetch("http://localhost:9000/todos");
  const todoS = await response.json();

  dispatch(loaded(todoS));
};

export default fetchTodoS;
