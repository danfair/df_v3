import React, { Component } from 'react';
import axios from 'axios';
import BigHero from './components/BigHero';
import Slab from './components/Slab';
import PageHeader from './components/PageHeader';
import PortfolioPieces from './components/PortfolioPieces';
import SplitImageText from './components/SplitImageText';
import ContactForm from './components/ContactForm';
import { browserHistory } from 'react-router';

class Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      allPagesData: null,
      pageContent: [],
      pageId: null,
      pageIsLoading: true
    }

    browserHistory.listen((event) => {
      let pathname = event.pathname.replace('/', '');
      
      this.setState({
        pageId: this.getPageId(pathname),
        pageIsLoading: true
      }, this.setPageContent);
    });
  }

  componentDidMount() {
    axios.get('/wp-json/wp/v2/pages')
      .then((response) => {
        console.log('response', response);
        this.setState({
          allPagesData: response.data
        }, this.setPageContent);
      });
  }

  getPageId(currentRoute) {
    if (!currentRoute) {
      currentRoute = this.props.location.pathname.length > 1 ? this.props.location.pathname.substr(1, this.props.location.pathname.length - 2) : 'home';
    }

    let pageId = null;

    this.state.allPagesData.forEach((page) => {
      if (page.slug == currentRoute) {
        pageId = page.id;
      }
    });

    return pageId;
  }

  setPageContent() {
    console.log(this.state.pageId);
    let pageId = this.state.pageId ? this.state.pageId : this.getPageId();

    axios.get(`/wp-json/wp/v2/pages/${pageId}`)
      .then((response) => {
        this.setState({
          pageContent: response.data.acf.content,
          pageIsLoading: false
        });
      });
  }

  render(props) {
    const flexibleContentComponents = {
      big_hero: BigHero,
      slab: Slab,
      page_header: PageHeader,
      split_image_text: SplitImageText,
      portfolio_pieces: PortfolioPieces,
      contact_form: ContactForm
    };

    return (
      <div className={this.state.pageIsLoading? 'page-content page-content--loading' : 'page-content'}>
        
          <div className="loading-page">
            <div className='uil-ripple-css'><div></div><div></div></div>
          </div>
        
          <div className="page-content__content">
            {this.state.pageContent.length > 0 &&
              this.state.pageContent.map((pageComponent, index) => {
              const TempComponent = flexibleContentComponents[pageComponent.acf_fc_layout];
              return <TempComponent key={index} componentData={pageComponent} socialData={this.props.socialData} />;
              })
            }
          </div>
      </div>
    );
  }
}

export default Page;