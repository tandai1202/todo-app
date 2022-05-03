import React from "react";
import { useSelector } from "react-redux";
import { getTodos, todosSelector } from "../../redux/selector";
import Todo from "./Todo";
import "./TodoList.scss";

const TodoList = () => {
  const todos = useSelector(todosSelector);
  // const todo = useSelector(todosSelector);

  return (
    <div className="todoList">
      {todos && todos.map((todo) => <Todo key={todo.id} data={todo} />)}
    </div>
  );
};

export default TodoList;
