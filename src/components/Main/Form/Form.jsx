import React, { Component } from "react";
import { emailContext } from "../../../context/emailContext";

class Form extends Component {
  static contextType = emailContext;

  createUser = (e) => {
    e.preventDefault()
    const { setNewEmail } = this.context
    let name = e.target.name.value;
    let email = e.target.email.value;
    let img = e.target.img.value;
    if (name.length === 0 || email.length === 0 || img.length === 0) {
      alert('Please fill in all fields')
    } else {
      this.props.create(name, email, img)
      setNewEmail(email);
      e.target.name.value = '';
      e.target.email.value = '';
      e.target.img.value = '';
    }
  }
  
  render() {
    return <div>
      <form onSubmit={this.createUser}>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" name="email" />
        <br />
        <label htmlFor="name">Image:</label>
        <br />
        <input type="url" name="img" />
        <br />
        <input type="submit" value="Login"/>
      </form>
    </div>;
  }
}

export default Form;
