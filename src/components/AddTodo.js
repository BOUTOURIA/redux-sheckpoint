import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHandler } from "../redux/action";

export default function AddTodo() {
  const [newText, setNewText] = useState("");

  const dispatch = useDispatch();

  const addtodos = () => {
    dispatch(
      addHandler({
        id: Math.random(),
        text: newText,
        isDone: false,
      })
    );
    setNewText("");
  };

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="type here..."
        id="myInput"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        autoFocus
      />
      <button className="btn-add" onClick={addtodos}>
        {" "}
        Add{" "}
      </button>
    </div>
  );
}