import React, { useState, useEffect } from "react";
import DataList from "./components/DataList";
import DataForm from "./components/DataForm";
import EditModal from "./components/EditModal";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState(null); 
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  
  // POST Request
  const handleAdd = async (newData) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newData),
        }
      );
      const result = await response.json();
      setData([result, ...data]);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };
  
  // PUT Request (Updated to handle modal save)
  const handleEdit = async (id, updatedData) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        }
      );
      const result = await response.json();
      setData(data.map((item) => (item.id === id ? result : item)));
      setEditItem(null); // Close the modal after saving
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };
  
  // DELETE Request
  const handleDelete = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  
  return (
    <div className="app-container">
      <h1 className="app-title">API Calls Demo</h1>
      <DataForm onAdd={handleAdd} />
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <DataList
          data={data}
          onEdit={(item) => setEditItem(item)}
          onDelete={handleDelete}
        />
      )}
      {/* Render EditModal if an item is being edited */}
      {editItem && (
        <EditModal
          item={editItem}
          onSave={(updatedData) => handleEdit(editItem.id, updatedData)}
          onClose={() => setEditItem(null)} 
        />
      )}
    </div>
  );
};

export default App;
