import React, { Component } from 'react';
import axios from 'axios';
import Page from './Page';
import Header from './components/Header';
import { browserHistory } from 'react-router';

require('../../css/style.scss');

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pagesData: null,
      pageContent: null,
      pageIsLoading: true,
      pageId: null
    };

    browserHistory.listen((event) => {
      let pathname = event.pathname.replace('/', '');
      this.setState({
        pageId: this.getPageId(pathname)
      }, this.setPageContent);
    })
  }

  componentDidMount() {
    axios.get('/wp-json/wp/v2/pages')
      .then((response) => {
        this.setState({
          pagesData: response.data
        }, this.setPageContent);
      });
  }

  setPageContent() {
    let pageId = this.state.pageId ? this.state.pageId : this.getPageId();

    axios.get(`/wp-json/wp/v2/pages/${pageId}`)
      .then((response) => {
        this.setState({
          pageContent: response.data.acf.content,
          pageIsLoading: false
        });
      });
  }

  getPageId(currentRoute) {
    if (!currentRoute) {
      currentRoute = this.props.location.pathname.length > 1 ? this.props.location.pathname.substr(1, this.props.location.pathname.length - 2) : 'home';
    }

    let pageId = null;

    this.state.pagesData.forEach((page) => {
      if (page.slug == currentRoute) {
        pageId = page.id;
      }
    });

    return pageId;
  }

  render() {
    return (
      <div>
        <Header updatePageId={this.updatePageId} />
        {this.state.pageIsLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Page pageContent={this.state.pageContent} />
        )}
      </div>
    );
  }
}

export default Main;