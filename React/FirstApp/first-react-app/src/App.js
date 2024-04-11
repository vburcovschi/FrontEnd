import './App.css'
import Image from "./components/Image";
import React from "react";
import Button from "./components/Button";
import Blogpost from "./components/Blogpost";
import TimeM from "./components/Time";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Blogpost titleBlog={'My first React APP'}/>
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
