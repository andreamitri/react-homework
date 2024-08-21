import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        This app was coded by Andrea Mitri and is open-sourced on{" "}
        <a
          href="https://github.com/andreamitri/react-homework"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        .{" "}
      </p>
    </div>
  );
}

export default App;
