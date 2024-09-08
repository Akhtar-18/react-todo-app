# Getting Started with Create React App - React Todo App

A simple React-based Todo application that allows users to add, delete, and filter tasks. This project demonstrates basic React functionalities such as state management, event handling, and API integration using axios.

## Features

1. Add new todos
2. Mark todos as completed or pending
3. Delete todos
4. Filter todos by all, completed, or pending
5. Stores todos in the browser's local storage

## Directory Structure

```plaintext
src/
│
├── components/
│   ├── AddTodo.js           # Component for adding new todos
│   ├── Filter.js            # Component for filtering todos
│   ├── TodoApp.js           # Main app component
│   ├── TodoItem.js          # Component representing each todo item
│   └── TodoList.js          # Component that lists all todo items
│
├── css/
│   └── styles.css           # Application styles
│
├── App.js                   # Root component
└── index.js                 # Application entry point
```

## Installation

1. Clone the repository:

### git clone https://github.com/your-username/react-todo-app.git

2. Navigate into the project directory:

### cd react-todo-app

3. Install the dependencies:

### npm install

## Running the Application

To start the application locally, run:

### nom start

## Dependencies

1. React: A JavaScript library for building user interfaces.
2. Axios: Promise-based HTTP client for making API requests.
3. React Scripts: A set of scripts from Create React App for setting up a React environment.

## Components Breakdown

### TodoApp.js

The main application component that handles:

1. Fetching todos from a remote API (using axios).
2. Managing state for the list of todos and the current filter.
3. Adding, deleting, and toggling the completion status of todos.

### AddTodo.js

A form component that allows users to input new tasks. It updates the todo list in TodoApp.js.

### TodoList.js

Displays the list of todos by rendering individual TodoItem.js components. It also applies filtering based on the selected filter.

### TodoItem.js

Represents a single todo item, with the ability to mark it as complete or delete it from the list.

### Filter.js

Provides buttons to filter todos by all, completed, or pending.

## Styling

The app uses simple CSS for styling, located in src/css/styles.css. Key classes include:

1. .todo-app: Styles for the main container.
2. .completed: Styles applied to completed todo items.
3. button:hover: Hover effects for buttons.

## API

The application fetches todos from a sample API:

### https://dummyjson.com/todos

Upon successful fetching, the todos are saved in local storage and used to persist state across page reloads.

