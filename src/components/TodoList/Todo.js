import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/todoSlice";
import "./TodoList.scss";
import { MdDelete } from "react-icons/md";

const Todo = ({ data }) => {
  const dispatch = useDispatch();
  const completeTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (data) => {
    dispatch(deleteTodo(data));
  };

  return (
    <div className={data.completed ? "todo completed" : "todo"}>
      <label htmlFor="" className="todoList-label">
        <input
          type="checkbox"
          className="todoList-checkbox"
          checked={data.completed}
          onChange={() => completeTodo(data.id)}
        />
        <span className="todoList-title">{data.name}</span>
      </label>
      <button className="todo-button" onClick={() => handleDelete(data.id)}>
        <MdDelete />
      </button>
    </div>
  );
};

export default Todo;
