import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <h1>useLocalStorage Demo</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <h2>Hello, {name || "Guest"}!</h2>

      <p>
        Refresh the page. Your theme and name will stay saved in localStorage.
      </p>
    </div>
  );
}

export default App;
