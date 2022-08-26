import { toggled } from "../actions";

const updateTodoStatus = (todoId, currentStatus) => {
  console.log(todoId, currentStatus);
  return async (dispatch, getState) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !currentStatus,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();
    console.log(todo);
    dispatch(toggled(todo.id));
  };
};

export default updateTodoStatus;
