import { deleted } from "../actions";

const deleteTodo = (todoId) => {
  return async (dispatch, getState) => {
    const response = await fetch(
      `https://fake-server-for-lws.herokuapp.com/todos/${todoId}`,
      {
        method: "DELETE",
      }
    );
    const todo = await response.json();
    dispatch(deleted(todoId));
  };
};

export default deleteTodo;
