// file: src/components/PhoneForm.js
import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // ??? ??? ??
    e.preventDefault();
    // ???? onCreate ? ??? ???? ??
    this.props.onCreate(this.state);
    // ?? ???
    this.setState({
      name: '',
      phone: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="??"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="????"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <button type="submit">??</button>
      </form>
    );
  }
}

export default PhoneForm;