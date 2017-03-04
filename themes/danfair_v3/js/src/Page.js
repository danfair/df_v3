import React, { Component } from 'react';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPageData: null,
      isLoading: true
    }
  }

  getPageData() {
    console.log('routeName', this.props.routeName);
    console.log('pagesData', this.props.pagesData);

    if (this.props.routeName && this.props.pagesData) {
      const currentRoute = this.props.routeName.length > 1 ? this.props.routeName.substr(1, this.props.routeName.length - 2) : 'home';
      const currentPage = null; 
      console.log('currentRoute', currentRoute);

      // for (var page in this.props.pagesData) {
      this.props.pagesData.forEach((page) => {
        console.log(page.slug);
        if (page.slug == currentRoute) {
          console.log('found it!');
          // this.setState({
          //   currentPageData: page
          // })
        }
      });
    }
  }

  render(props) {
    let pageData = this.getPageData();

    return (
      <div>
        <ul>
          {this.props.pagesData ? ( 
            <h1>{this.props.pagesData.length}</h1>
          ) : (
            <h1>No</h1>
          )
          }
        </ul>
      </div>
    );
  }

  componentWillUpdate() {
    
  }
}

export default Page;