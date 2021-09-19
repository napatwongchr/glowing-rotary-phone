import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Todo App
        </a>
      </header>

      <nav>
        <ul>
          <li>Home</li>
          <li>Articles</li>
          <li>News</li>
          <li>About Us</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
