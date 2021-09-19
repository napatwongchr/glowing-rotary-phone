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

      <article>
        <h1>First aritcle</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          dolorum non omnis, quos vitae quibusdam a numquam culpa nam ea quis,
          qui quod, fugit nesciunt voluptate assumenda repudiandae saepe
          impedit.
        </p>
      </article>
    </div>
  );
}

export default App;
