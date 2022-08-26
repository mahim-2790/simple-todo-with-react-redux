import { loaded } from "../actions";

const fetchTodoS = async (dispatch) => {
  const response = await fetch(
    "https://fake-server-for-lws.herokuapp.com/todos"
  );
  const todoS = await response.json();

  dispatch(loaded(todoS));
};

export default fetchTodoS;
