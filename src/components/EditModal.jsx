import React, { useState } from "react";
import "./EditModal.css";

const EditModal = ({ item, onSave, onClose }) => {
  const [title, setTitle] = useState(item.title);
  const [body, setBody] = useState(item.body);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the id along with the updated title and body
    onSave({ id: item.id, title, body });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Item</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="modal-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="modal-textarea"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
          <div className="modal-buttons">
            <button type="submit" className="save-button">
              Save
            </button>
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
