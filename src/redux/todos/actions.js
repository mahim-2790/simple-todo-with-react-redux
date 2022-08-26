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

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: {
      todoText,
    },
  };
};

export const loaded = (todoS) => {
  return {
    type: LOADED,
    payload: {
      todoS,
    },
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: {
      todoId,
    },
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: COLOR_SELECTED,
    payload: {
      todoId,
      color,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: {
      todoId,
    },
  };
};

export const allCompleted = () => {
  return {
    type: ALL_COMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};

export const edited = (todoId, editedText) => {
  return {
    type: EDITED,
    payload: {
      todoId,
      editedText,
    },
  };
};
