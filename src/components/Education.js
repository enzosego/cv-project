import React, {Component} from 'react';

export class Education extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleName: this.props.educationData.title,
      institutionName: this.props.educationData.institution,
      dateOfConcurrence: this.props.educationData.educationDate,
    }

    this.handleTitle = this.handleTitle.bind(this);
    this.handleInstitution = this.handleInstitution.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
  }

  passDataToParent() {
    this.props.handleEducationData(this.state.titleName, this.state.institutionName, this.state.dateOfConcurrence)
  }

  handleTitle(e) {
    this.setState({
      titleName: e.target.value
    }, () => this.passDataToParent())
  }

  handleInstitution(e) {
    this.setState({
      institutionName: e.target.value
    }, () => this.passDataToParent())
  }

  handleStartDate(e) {
    this.state.dateOfConcurrence[0] = e.target.value;
    this.setState({
      dateOfConcurrence: this.state.dateOfConcurrence
    }, () => this.passDataToParent())
  }

  handleEndDate(e) {
    this.state.dateOfConcurrence[1] = e.target.value;
    this.setState({
      dateOfConcurrence: this.state.dateOfConcurrence
    }, () => this.passDataToParent())
  }

  render() {
    const {titleName, institutionName, dateOfConcurrence} = this.state;
    return (
        <div className="form-fields">
          <input type="text" 
          value={titleName}
          className='title-name' 
          placeholder='Enter your title'
          onChange={this.handleTitle}/>
          <input type="text" 
          value={institutionName}
          className='institution-name' 
          onChange={this.handleInstitution}/>
          <input type="date" 
          value={dateOfConcurrence[0]}
          className='start-date'
          onChange={this.handleStartDate}/>
          <input type="date" 
          value={dateOfConcurrence[1]}
          className='end-date'
          onChange={this.handleEndDate}/>
        </div>
    )
  }
}
