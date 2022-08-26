import { deleted } from "../actions";

const deleteTodo = (todoId) => {
  console.log(todoId);
  return async (dispatch, getState) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE",
    });
    const todo = await response.json();
    console.log(todo);
    dispatch(deleted(todoId));
  };
};

export default deleteTodo;
