import React, { useState } from "react";
import Editor from "./components/Editor/Editor";
import List from "./components/List/List";
import Header from "./components/Header/Header";
import "./App.css";

interface Todo {
  id: number;
  content: string;
  isDone: boolean;
  date: number;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (content: string) => {
    const newTodo = {
      id: todos.length,
      content,
      isDone: false,
      date: new Date().getTime(),
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <Editor onAdd={handleAddTodo} />
      <List
        todos={todos}
        onDelete={handleDeleteTodo}
        onUpdate={handleUpdateTodo}
      />
    </div>
  );
}

export default App;
