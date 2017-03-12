import React, { Component } from 'react';
import axios from 'axios';
import Page from './Page';
import Header from './components/Header';
import Footer from './components/Footer';
import { browserHistory } from 'react-router';

require('../../css/style.scss');


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pageIsLoading: false,
      socialData: []
    };
  }

  componentDidMount() {
    axios.get('/wp-json/wp/v2/acf/options/social_links')
      .then((response) => {
        this.setState({
          socialData: response.data
        });
      })
  }

  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        socialData: this.state.socialData,
        key: index
      })
    })

    return (
      <div>
        <Header />
        {children}
        <Footer socialData={this.state.socialData} />
      </div>
    );
  }
}

export default Main;