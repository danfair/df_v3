import React, { Component } from 'react';
import { Link } from 'react-router';

class BigHero extends Component {
  render(props) {
    const componentData = this.props.componentData;
    // console.log(componentData);
    return (
      <section className="hero" id="hero" style={{backgroundImage: 'url(' + componentData.background_image + ')'}}>
        <div className="container">
          <div className="hero__content">
            <h1 dangerouslySetInnerHTML={{ __html: componentData.description }} className="hero__title h2" />
            <Link to={'/work'} className="btn btn--outline-orange js-scroll-link">See Work</Link>
            <div className="hero__social-links">
              {this.props.socialData.length && 
                this.props.socialData.map((socialItem, index) => {
                  return (
                    <a href={socialItem.link} className="hero__social-link" target="_blank" key={index}>
                      <img src={socialItem.icon.url} alt={socialItem.name} />
                    </a>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BigHero;