import { edited } from "../actions";

const updateTodoText = (todoId, editedText) => {
  return async (dispatch, getState) => {
    const response = await fetch(
      `https://fake-server-for-lws.herokuapp.com/todos/${todoId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          text: editedText,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await response.json();

    dispatch(edited(todo.id, todo.text));
  };
};

export default updateTodoText;
