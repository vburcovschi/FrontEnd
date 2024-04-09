import './App.css';
import Image from "./Image";
import React from "react";

class Button extends React.Component{
  constructor(props) {
    super(props);
    this.state = { clicked:false }
  }
  render(){
    const { clicked } = this.state;
    if (clicked) {
      return 'Clicked'
    }
    return (
      <button onClick={() => this.setState({clicked:true})}>Click me</button>
  )
  }
}

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
