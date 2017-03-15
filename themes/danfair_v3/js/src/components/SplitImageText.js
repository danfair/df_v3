import React, { Component } from 'react';

class SplitImageText extends Component {
  render(props) {
    const componentData = this.props.componentData;

    let classNames = `split-image-text split-image-text--anchor-${componentData.anchor_image_to_bottom} split-image-text--bg-${componentData.background_color} split-image-text--image-${componentData.image_side}`;
    return (
      <section className={classNames}>
        <div className="container">
          <div className="split-image-text__img">
              <img src={componentData.image} />
          </div>
          <div className="split-image-text__text">
            <h1 className="split-image-text__title h2">{componentData.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: componentData.description }} className="split-image-text__description" />
          </div>
        </div>
      </section>
    );
  }
}

export default SplitImageText;