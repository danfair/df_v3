import React, { Component } from 'react';
import { Link } from 'react-router';

class About extends Component {
  render() {
    return (
      <div>
        About what!<br />
        <Link to={ 'Test' }>Go to test page</Link>
      </div>
    );
  }
}

export default About;