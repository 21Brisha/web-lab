import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]); // List of todos
  const [input, setInput] = useState(""); // Current input
  const [editIndex, setEditIndex] = useState(null); // Track which todo to edit

  // Add or update todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    if (editIndex !== null) {
      // Update existing todo
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = input;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      // Add new todo
      setTodos([...todos, input]);
    }

    setInput(""); // Clear input
  };

  // Delete todo
  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Edit todo
  const handleEdit = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: "5px" }}>
            {todo}{" "}
            <button onClick={() => handleEdit(index)}>Edit</button>{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;