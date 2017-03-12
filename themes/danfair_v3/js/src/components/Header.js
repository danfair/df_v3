import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import axios from 'axios';

class Header extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      menuItems: [],
      mobileMenuIsOpen: false
    }

    browserHistory.listen((event) => {
      if (this.state.mobileMenuIsOpen) {
        this.toggleMenu();
      }
    });

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      mobileMenuIsOpen: !this.state.mobileMenuIsOpen
    });
  }

  render(props) {
    let themeDirectory = '/wp-content/themes/danfair_v3';

    return (
      <div>
        <header className={this.state.mobileMenuIsOpen ? 'header mobile-menu-open' : 'header'}>
          <div className="container container--wide">
            <Link to={'/'} className="header__logo">
              <img src={`${themeDirectory}/img/df.svg`} className="header__logo-img" alt="Dan Fair" />
              <span>DAN FAIR</span>
            </Link>  
            <nav className="header__nav">
              <ul>
                {this.state.menuItems}
              </ul>
            </nav>
            <a onClick={this.toggleMenu} className="header__menu-icon">
              <img src={`${themeDirectory}/img/burg.svg`} />
            </a>
          </div>
        </header>
        <div className={this.state.mobileMenuIsOpen ? 'site-blocker is-open' : 'site-blocker'}></div>
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