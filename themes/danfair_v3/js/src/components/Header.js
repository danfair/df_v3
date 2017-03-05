import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import axios from 'axios';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: []
    }
  }

  render(props) {
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
                <Link to={menuItem.object_slug}>{menuItem.title}</Link>
              </li>
            )
          })
        });
      });
  }
}

export default Header;