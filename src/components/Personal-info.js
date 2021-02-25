import React, {Component} from 'react';

export class PersonalInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: this.props.personalData.name[0],
      lastName: this.props.personalData.name[1],
      eMail: this.props.personalData.mail,
      phoneNumber: this.props.personalData.phoneNumber,
      aboutInput: this.props.personalData.about,
      whyFitInput: this.props.personalData.whyFit
    }
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail =  this.handleEmail.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    this.handleAboutInput = this.handleAboutInput.bind(this);
    this.handleWhyFitInput = this.handleWhyFitInput.bind(this);
  }

  passDataToParent() {
    const {firstName, lastName, eMail, phoneNumber, aboutInput, whyFitInput} = this.state;
    this.props.handlePersonalData(firstName, lastName, eMail,
      phoneNumber, aboutInput, whyFitInput);
  }

  handleFirstName(e) {
    this.setState({
      firstName: e.target.value
    }, () => this.passDataToParent())
  }

  handleLastName(e) {
    this.setState({
      lastName: e.target.value
    }, () => this.passDataToParent())
  }

  handleEmail(e) {
    this.setState({
      eMail: e.target.value
    }, () => this.passDataToParent())
  }

  handlePhoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value
    }, () => this.passDataToParent())
  }

  handleAboutInput(e) {
    this.setState({
      aboutInput: e.target.value
    }, () => this.passDataToParent())
  }

  handleWhyFitInput(e) {
    this.setState({
      whyFitInput: e.target.value
    }, () => this.passDataToParent())
  }

  render() {
    const {name, mail, number, about, whyFit} = this.props.personalData;
    return (
      <div className="form-fields">
        <input type="text" 
        className='names'
          defaultValue={name[0]}
          placeholder='Enter your first name'
          onBlur={e => this.handleFirstName(e)}/>
        <input type="text" 
        className="names"
          defaultValue={name[1]}
          placeholder='Enter your last name'
          onBlur={e => this.handleLastName(e)}/>
        <input type="email" 
        className="secondary-info"
          defaultValue={mail}
          placeholder='Enter your e-mail'
          onBlur={e => this.handleEmail(e)}/>
        <input type="text" 
        className="secondary-info"
          defaultValue={number}
          placeholder='Enter your phone number'
          onBlur={e => this.handlePhoneNumber(e)}/>
        <textarea cols="62"
          defaultValue={about}
          rows="5" 
          placeholder='Tell us about yourself.'
          onBlur={e => this.handleAboutInput(e)}></textarea>
        <textarea cols="62" 
          defaultValue={whyFit}
          rows="5" 
          placeholder='Tell us why are you a good fit for our company.'
          onBlur={e => this.handleWhyFitInput(e)}></textarea>
      </div>
    )
  }
}
