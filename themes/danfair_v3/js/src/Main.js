import React, { Component } from 'react';
import axios from 'axios';
import Page from './Page';
import Header from './components/Header';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pagesData: null
    }
  }

  componentDidMount() {
    axios.get('/wp-json/wp/v2/pages')
      .then((response) => {
        this.setState({
          pagesData: response.data
        });
      });
  }

  render() {
    return (
      <div className="main-component">
        <Header />
        <Page pagesData={this.state.pagesData} routeName={this.props.location.pathname} />
      </div>
    );
  }
}

export default Main;