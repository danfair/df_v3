import React, { Component } from 'react';
import Header from './components/Header';

class Main extends Component {
  render() {
    return (
      <div className="main-component">
        <Header />
        { this.props.children }
      </div>
    );
  }
}

export default Main;