import React, { Component } from "react";

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imgErr: false
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.details.img !== this.props.details.img) {
      this.setState({ imgErr: false });
    }
  }

  handleErr = () => this.setState({ imgErr: true })

  


  render() {
    return this.props.details.name.length !== 0 ?
      <div>
        <img src={this.state.imgErr ? '/assets/not-available.png' : this.props.details.img } onError={this.handleErr} alt="Profile" />
        <p>Nombre: {this.props.details.name}</p>
        <p>Email: {this.props.details.email}</p>
      </div> :
      <></>

  }
}

export default Card;
