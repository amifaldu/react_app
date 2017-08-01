import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
class Toggle extends Component {
  render() {
    return (
      <p>hello word
        <Link to="/student">App</Link>
      </p>
    );
  }
}

export default Toggle;
