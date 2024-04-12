import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {name}= this.props;
    return <h1>
      <div className="message">Hi! My name is <span className="name">{name}</span></div>
    </h1>
  }
}

export default Message;