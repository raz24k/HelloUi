import { createBrowserHistory } from "history";
import { useRef } from "react";
import { Route, Router } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";

export const topLevelHistory = createBrowserHistory({
  basename: "/build",
});

function App() {
  const navRef = useRef();

  const Content = () => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Docs
        </a>
        <p>
          <code>SLVLN SMGN SMN</code>
        </p>
      </header>
    </div>
  );

  return (
    <Router basename="/build" ref={navRef} history={topLevelHistory}>
      <Route path="/" exact component={Content} />
    </Router>
  );
}

export default App;
