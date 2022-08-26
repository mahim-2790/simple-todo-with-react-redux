import { toggled } from "../actions";

const updateTodoStatus = (todoId, currentStatus) => {
  return async (dispatch, getState) => {
    const response = await fetch(
      `https://fake-server-for-lws.herokuapp.com/todos/${todoId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          completed: !currentStatus,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await response.json();

    dispatch(toggled(todo.id));
  };
};

export default updateTodoStatus;
