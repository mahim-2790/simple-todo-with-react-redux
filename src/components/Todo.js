import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import cancelImage from "../assets/images/cancel.png";
import editIcon from "../assets/images/pencil.png";
import deleteTodo from "../redux/todos/thunk/deleteTodo";
import updateColor from "../redux/todos/thunk/updateColor";
import updateTodoStatus from "../redux/todos/thunk/updateTodoStatus";
import updateTodoText from "../redux/todos/thunk/updateTodoText";

const Todo = ({ todo }) => {
  const { text, id, completed, color } = todo;

  const dispatch = useDispatch();
  const [editInput, setEditInput] = useState(text);
  const [editStatus, setEditStatus] = useState(false);

  const handleStatusChange = (todoId, completed) => {
    dispatch(updateTodoStatus(todoId, completed));
  };

  const handleColorChange = (todoId, color) => {
    dispatch(updateColor(todoId, color));
  };

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodoText(id, editInput));
    setEditStatus(false);
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

      {editStatus && (
        <form className="flex-1" onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editInput}
            className={`p-2 border-0 rounded focus:outline-none flex-1 `}
            autoFocus={editStatus}
            onChange={(e) => setEditInput(e.target.value)}
          />
        </form>
      )}

      {!editStatus && (
        <div className={`select-none flex-1 ${completed && "line-through"}`}>
          {text}
        </div>
      )}

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500  ${
          color === "green" && "bg-green-500"
        }`}
        onClick={() => handleColorChange(id, "green")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500  ${
          color === "yellow" && "bg-yellow-500"
        }`}
        onClick={() => handleColorChange(id, "yellow")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${
          color === "red" && "bg-red-500"
        }`}
        onClick={() => handleColorChange(id, "red")}
      ></div>

      <img
        src={editIcon}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="edit"
        onClick={() => setEditStatus((prev) => !prev)}
      />

      <img
        src={cancelImage}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        onClick={() => handleDeleteTodo(id)}
      />
    </div>
  );
};

export default Todo;
