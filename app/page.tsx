"use client";
import { useState } from "react";
import Image from "next/image";
import hackLogo from "./assets/hackumbcLogo.png"
import starsLogo from "./assets/starsLogo2.jpg"
import stats from "./assets/frameworkStats.png"
import Navbar from "./components/Navbar"
import CreateNote from "./components/CreateNote"
import NoteCard from "./components/NoteCard"

type Note = {
  title: string;
  body: string;
};

export default function Home() {
  const [currentTab, setCurrentTab] = useState("home");
  const [notes, setNotes] = useState<Note[]>([]);

  function handleAddNote(title: string, body: string) {
    setNotes([...notes, { title, body }]);
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <Image src={hackLogo} alt="HackUMBC Logo" width={100} height={100}/>
        <Image src={starsLogo} alt="STARS Logo" width={100} height={100}/>
      </div>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {currentTab === "home" && (
        <div style={{ backgroundColor: "#112240", border: "1px solid #2e4a6b", borderRadius: "8px", padding: "32px" }}>
          <h1 style={{ margin: "0 0 8px 0" }}>Welcome to the React Workshop!</h1>
          <p style={{ color: "#a0b4c8", margin: "0 0 24px 0" }}>
            Build a notes app while learning the fundamentals of React like components, state, and props.
          </p>
          <button
            onClick={() => setCurrentTab("create")}
            style={{ padding: "10px 20px", borderRadius: "6px", border: "none", backgroundColor: "#4a90d9", color: "#ffffff", fontWeight: "bold", cursor: "pointer" }}
          >
            Get Started →
          </button>
        </div>
      )}

      {currentTab === "notes" && (
        <div>
          <h1>Notes</h1>
          {notes.length === 0 && <p>No notes yet.</p>}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {notes.map((note, index) => (
              <NoteCard key={index} title={note.title} body={note.body} />
            ))}
          </div>
        </div>
      )}

      {currentTab === "create" && (
        <CreateNote onAdd={handleAddNote} />
      )}

      {currentTab === "resources" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1>Resources</h1>

          {<Image src={stats} alt="Framework statistics did not load" width={400} height={200} />}

          <a href="https://docs.google.com/presentation/d/1kph33ms5ycAWGguCqweqSWiIQqAIsnaTkaIsB5HzFv4/edit?slide=id.p2#slide=id.p2" target="_blank" rel="noreferrer" style={{ color: "#4a90d9" }}>
            Today's Presentation
          </a>
          <a href="https://react.dev/learn/responding-to-events" target="_blank" rel="noreferrer" style={{ color: "#4a90d9" }}>
            React Documentation
          </a>
        </div>
      )}
    </div>
  );
}
