import React from "react";
import { useSelector } from "react-redux";
import SingleCompletedTodo from "./SingleCompletedTodo";

const CompletedTodoList = () => {
  const todoS = useSelector((state) => state.todos);
  return (
    <div>
      <div className="p-2 space-x-4 border-b border-gray-400/20">
        Completed Tasks
      </div>
      {todoS
        .filter((todo) => todo.completed)
        .map((todo) => (
          <SingleCompletedTodo todo={todo} key={todo.id} />
        ))}
    </div>
  );
};

export default CompletedTodoList;
