import React, { Component } from 'react';

class PortfolioPiece extends Component {
  render(props) {
    const componentData = this.props.componentData;

    return (
      <section className="portfolio-piece">
        <div className="container">
          <div className="portfolio-piece__content">
            <h1 className="h2">{componentData.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: componentData.description }} className="portfolio-piece__description" />
            <a className="btn btn--outline-black" href={componentData.link}>View Site</a>
          </div>
          <div className="portfolio-piece__img">
            <img src={componentData.image} alt="" />
          </div>
        </div>
      </section>
    );
  }
}

export default PortfolioPiece;