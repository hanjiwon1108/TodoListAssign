import { useState, useRef } from "react";
import "./Editor.css";

interface EditorProps {
  onAdd: (todo: string) => void;
}

function Editor({ onAdd }: EditorProps) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null); // input 요소에 포커스를 이동하기 위한 ref

  const handleAdd = () => {
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue("");
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="Editor">
      <input
        ref={inputRef}
        placeholder="새로운 Todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAdd}>추가</button>
    </div>
  );
}

export default Editor;
