import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formSubmitted: false,
      formErrors: false,
      validationError: false,
      message: null,
      email: null,
      name: null
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.setState({
      formErrors: false,
      validationError: false
    }, () => {
      let formIsValid = this.validateForm();
      if (formIsValid) {
        this.submitForm();
      }
    });
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.id; 

    this.setState({
      [name]: value
    });
  }

  validateForm() {
    if (this.state.name && this.state.email && this.state.message) {
      return true;
    } else {
      this.setState({
        validationError: true
      }, () => {
        return false;
      })
    }
  }

  submitForm() {
    axios({
      method: 'post',
      url: "//formspree.io/fair.dan@gmail.com",
      data: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }
    })
      .then((response) => {
        if (response.status == 200) {
          this.setState({
            formSubmitted: true
          });
        } else {
          this.setState({
            formErrors: true
          });
        }
      });
  }

  render(props) {
    const componentData = this.props.componentData;

    return (
      <div>
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: componentData.description }} className="contact-form__description" />
          <form className="contact-form" onSubmit={this.handleFormSubmit}>
            <input id="name" type="text" name="name" placeholder="Name" onChange={this.handleInputChange} />
            <input id="email" type="email" name="_reply-to" placeholder="Email" onChange={this.handleInputChange} />
            <textarea id="message" name="message" placeholder="Message" onChange={this.handleInputChange}></textarea>
            <input type="text" name="_gotcha"  onChange={this.handleInputChange} style={{display: 'none'}} />
            <div className={this.state.validationError ? 'contact-form__message error js-validation-error' : 'contact-form__message error js-validation-error hidden'}>
              <p>Please fill out the required fields. They're all required so I can contact you!</p>
            </div>
            <div className="contact-form__message error js-form-error hidden">
              <p>Sorry, there was some sort of error submitting the form! Please contact me on any of the channels listed in the footer or try again later.</p>
            </div>
            <input className="btn btn--outline-black" type="submit" value="Send" />
          </form>
          <div className={this.state.formSubmitted ? "contact-form__message success" : "contact-form__message success hidden"}>
            <p>Thanks! I'll get back to you as soon as I can, usually within 24 hours.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;