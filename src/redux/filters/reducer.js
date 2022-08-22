import { COLOR_CHANGED, STATUS_CHANGED } from "./actionType";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHANGED:
      return {
        ...state,
        status: action.payload.status,
      };
    case COLOR_CHANGED:
      const { color, changeType } = action.payload;

      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default reducer;
