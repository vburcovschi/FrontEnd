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


export default Button;
