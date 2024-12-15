# API Calls Demo

This project is a demonstration of how to perform CRUD (Create, Read, Update, Delete) operations using the `fetch` API with a third-party RESTful service, **JSONPlaceholder API**. It provides a simple user interface for interacting with an external API, allowing you to manage and display data dynamically.

---

## Features

- **Fetch Data**: Retrieve and display posts from an API on initial load.
- **Add New Data**: Add a new post using a `POST` request, and display it dynamically in the UI.
- **Edit Existing Data**: Update the title and content of an existing post using a `PUT` request through a modal interface.
- **Delete Data**: Remove posts from the UI and the API using a `DELETE` request.
- **Dynamic Modal**: Use a modal popup for editing posts, improving the user experience.
- **Error Handling**: Gracefully handle API errors to ensure a stable user interface.

---

## API Endpoints

The application utilizes the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) for data simulation. Below are the endpoints used:

### 1. **Fetch All Posts**
- **URL**: `https://jsonplaceholder.typicode.com/posts`  
- **Method**: `GET`  
- **Description**: Retrieves a list of posts. The data is fetched on initial load and displayed in a list format.  

### 2. **Create a New Post**
- **URL**: `https://jsonplaceholder.typicode.com/posts`  
- **Method**: `POST`  
- **Headers**:
  ```json
  {
    "Content-Type": "application/json"
  }
