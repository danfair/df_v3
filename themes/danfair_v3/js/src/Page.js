import React, { Component } from 'react';
import axios from 'axios';
import BigHero from './components/BigHero';
import Slab from './components/Slab';

class Page extends Component {

  render(props) {
    const flexibleContentComponents = {
      big_hero: BigHero,
      slab: Slab
    };

    return (
      <div className="page-content">
        {this.props.pageContent.map((pageComponent, index) => {
          const TempComponent = flexibleContentComponents[pageComponent.acf_fc_layout];
          return <TempComponent key={index} componentData={pageComponent} socialData={this.props.socialData} />;
        })}
      </div>
    );
  }
}

export default Page;