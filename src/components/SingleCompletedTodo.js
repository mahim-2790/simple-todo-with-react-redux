import React from "react";
import { useDispatch } from "react-redux";
import updateTodoStatus from "../redux/todos/thunk/updateTodoStatus";

const SingleCompletedTodo = ({ todo }) => {
  const dispatch = useDispatch();
  const { id, completed, text, color } = todo;
  const handleStatusChange = (todoId, completed) => {
    dispatch(updateTodoStatus(todoId, completed));
  };
  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type="checkbox"
          className="opacity-0 absolute rounded-full"
          checked={completed}
          onChange={() => handleStatusChange(id, completed)}
        />
        {completed && (
          <svg
            className=" fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div className={`select-none flex-1 "}`}>{text}</div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto border-green-500  ${
          color === "green" && "bg-green-500"
        }`}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto border-yellow-500  ${
          color === "yellow" && "bg-yellow-500"
        }`}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto border-red-500 ${
          color === "red" && "bg-red-500"
        }`}
      ></div>
    </div>
  );
};

export default SingleCompletedTodo;
