import './App.css'
import Image from "./components/Image";
import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <>
          <Button />
        </>
      </header>
    </div>
  );
}

export default App;
