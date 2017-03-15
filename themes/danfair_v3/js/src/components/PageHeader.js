import React, { Component } from 'react';

class PageHeader extends Component {
  render(props) {
    const componentData = this.props.componentData;

    return (
      <section className="page-header">
        <div className="container">
          <img className="page-header__lead-img" src={componentData.icon} />
          <h2 className="page-header__title h1">{componentData.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: componentData.description }} className="page-header__description" />
        </div>
      </section>
    );
  }
}

export default PageHeader;