type NoteCardProps = {
  title: string;
  body: string;
};

export default function NoteCard({ title, body }: NoteCardProps) {
  return (
    <div
      className="note-card"
      style={{
        backgroundColor: "#112240",
        border: "1px solid #2e4a6b",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <h2 style={{ margin: "0 0 8px 0" }}>{title}</h2>
      <p style={{ margin: 0, color: "#a0b4c8" }}>{body}</p>
    </div>
  );
}
