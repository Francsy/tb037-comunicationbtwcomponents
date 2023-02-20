import React, { Component } from "react";
import { emailContext } from "../../context/emailContext";

class Header extends Component {
  render() {
    return <div>
      <emailContext.Consumer>
        {({email}) => email ? <h1>Welcome {email}!</h1> : <h1>Introduce your details:</h1>}
      
      </emailContext.Consumer>
      </div>;
  }
}

export default Header;
