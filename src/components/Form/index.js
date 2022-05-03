import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import { v4 as uuidv4 } from "uuid";
import "./Form.scss";

const Form = () => {
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const add = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: name,
        completed: false,
      })
    );
    inputRef.current.focus();
    setName("");
  };

  const handleAdd = () => {
    if (name === "") {
      return true;
    }
    add();
  };

  return (
    <div className="form">
      <input
        ref={inputRef}
        type="text"
        className="form-input"
        value={name}
        onChange={handleInputChange}
      />
      <button type="button" className="form-button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Form;
