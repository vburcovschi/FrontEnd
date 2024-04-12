import React from "react";

class EmailSend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = () => {
    alert(`Письмо отправлено на адрес: ${this.state.email}`);
  };
  render() {
    return(
    <div>
      <label htmlFor='email'>Введите email:</label>
      <input type='email' id='email' onChange={this.handleEmailChange}></input>
      <button onClick={this.handleSubmit}>Отправить</button>
    </div>
    )
  }
}

export default EmailSend;