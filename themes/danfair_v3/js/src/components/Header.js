import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: []
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.menuItems}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    axios.get('/wp-json/wp-api-menus/v2/menus/2')
      .then((response) => {
        this.setState({
          menuItems: response.data.items.map((menuItem) => {
            return (
              <li key={menuItem.id}>
                {menuItem.title}
              </li>
            )
          })
        });
      });
  }
}

export default Header;