import "./TodoItem.css";

interface TodoItemProps {
  content: string;
  isDone: boolean;
  date: number;
  onDelete: () => void;
  onUpdate: () => void;
}

function TodoItem({
  content,
  isDone,
  date,
  onDelete,
  onUpdate,
}: TodoItemProps) {
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onUpdate} />
      <p>{content}</p>
      <p className="date">{new Date(date).toLocaleDateString()}</p>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
}

export default TodoItem;
