import React, { Component } from 'react';
import PortfolioPiece from './PorfolioPiece';

class PortfolioPieces extends Component {
  render(props) {
    const componentData = this.props.componentData;
    console.log(componentData);

    return (
      <div className="portfolio-pieces">
        {componentData.piece.map((piece, index) => {
          return (
            <PortfolioPiece componentData={piece} key={index} />
          )
        })}
      </div>
    );
  }
}

export default PortfolioPieces;