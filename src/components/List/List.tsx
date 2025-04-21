import { useState } from "react";
import "./List.css";
import TodoItem from "../TodoItem/TodoItem";

interface Todo {
  id: number;
  content: string;
  isDone: boolean;
  date: number;
}

interface ListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onUpdate: (id: number) => void;
}

const List = ({ todos, onDelete, onUpdate }: ListProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTodos = todos.filter((todo) =>
    todo.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="List">
      <h4> Todo List 🌱</h4>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            content={todo.content}
            isDone={todo.isDone}
            date={todo.date}
            onDelete={() => onDelete(todo.id)}
            onUpdate={() => onUpdate(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
