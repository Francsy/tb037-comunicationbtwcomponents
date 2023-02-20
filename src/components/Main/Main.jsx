import React, { Component } from "react";
import Form from './Form'
import Card from './Card'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      img: ''
    }
  }

  createUser = (name, email, img) => this.setState({name, email, img})  

  render() {
    return <div>
      <Form create={this.createUser} />
      <Card details={this.state} />
    </div>;
  }
}

export default Main;
