import React, { useState } from "react";
import "./DataForm.css";

const DataForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, body });
    setTitle("");
    setBody("");
  };
  
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="form-textarea"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>
      <button type="submit" className="form-button">
        Add
      </button>
    </form>
  );
};

export default DataForm;
