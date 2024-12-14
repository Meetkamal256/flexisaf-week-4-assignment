import React from "react";
import "./DataList.css";

const DataList = ({ data, onEdit, onDelete }) => {
  return (
    <div className="list-container">
      {data.map((item) => (
        <div key={item.id} className="list-item">
          <h3 className="item-title">{item.title}</h3>
          <p className="item-body">{item.body}</p>
          <div className="button-group">
            <button className="edit-button" onClick={() => onEdit(item)}>
              Edit
            </button>
            <button className="delete-button" onClick={() => onDelete(item.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataList;
