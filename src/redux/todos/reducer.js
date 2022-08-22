import {
  ADDED,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
  COLOR_SELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";
import { initialState } from "./initialState";

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload.todoText,
          completed: false,
        },
      ];
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload.todoId) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case COLOR_SELECTED:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });
    case DELETED:
      return state.filter((todo) => todo.id !== action.payload.todoId);
    case ALL_COMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEAR_COMPLETED:
      // console.log("got to reducer");
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

export default reducer;
