import {
  ADDED,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
  COLOR_SELECTED,
  DELETED,
  EDITED,
  LOADED,
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
    case LOADED:
      return [...action.payload.todoS];

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
      return state.filter((todo) => !todo.completed);
    case EDITED:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          if (todo.text !== action.payload.editedText) {
            return {
              ...todo,
              text: action.payload.editedText,
            };
          } else {
            return todo;
          }
        }
        return todo;
      });
    default:
      return state;
  }
};

export default reducer;
