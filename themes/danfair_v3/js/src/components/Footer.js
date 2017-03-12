import React, { Component } from 'react';

class Footer extends Component {
  render(props) {
    return (
      <footer className="footer">
			<div className="container">
				<div className="footer__social-links">
          {this.props.socialData.length > 0 &&
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
		</footer>
    );
  }
}

export default Footer;