import { useState } from "react";

type CreateNoteProps = {
  onAdd: (title: string, body: string) => void;
};

export default function CreateNote({ onAdd }: CreateNoteProps) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit() {
    if (title === "") return;
    onAdd(title, body);
    setTitle("");
    setBody("");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <h1>Create a Note</h1>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #2e4a6b",
          backgroundColor: "#112240",
          color: "#ffffff",
          fontSize: "16px",
        }}
      />
      <textarea
        placeholder="Note body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={5}
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #2e4a6b",
          backgroundColor: "#112240",
          color: "#ffffff",
          fontSize: "16px",
          resize: "vertical",
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#4a90d9",
          color: "#ffffff",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Add Note
      </button>
    </div>
  );
}
