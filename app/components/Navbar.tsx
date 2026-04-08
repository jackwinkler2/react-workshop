type NavbarProps = {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
};

const baseStyle = {
  padding: "8px 16px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};

const activeStyle = {
  ...baseStyle,
  backgroundColor: "#4a90d9",
  color: "#ffffff",
};

const inactiveStyle = {
  ...baseStyle,
  backgroundColor: "transparent",
  color: "#a0b4c8",
};

export default function Navbar({ currentTab, setCurrentTab }: NavbarProps) {
  return (
    <nav style={{ display: "flex", gap: "8px", padding: "16px 0" }}>
      <button style={currentTab === "home" ? activeStyle : inactiveStyle} onClick={() => setCurrentTab("home")}>
        Home
      </button>

      <button style={currentTab === "notes" ? activeStyle : inactiveStyle} onClick={() => setCurrentTab("notes")}>
        Notes
      </button>

      <button style={currentTab === "create" ? activeStyle : inactiveStyle} onClick={() => setCurrentTab("create")}>
        Create
      </button>

      <button style={currentTab === "resources" ? activeStyle : inactiveStyle} onClick={() => setCurrentTab("resources")}>
        Resources
      </button>
    </nav>
  );
}