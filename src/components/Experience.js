import React, {Component} from 'react';

export class Experience extends Component {
  constructor(props) {
    super(props)

    this.state = {
      workField: this.props.experienceData.field,
      employerName: this.props.experienceData.employer,
      dateOfConcurrence: this.props.experienceData.fieldDate
    }

    this.handleWorkField = this.handleWorkField.bind(this);
    this.handleEmployer = this.handleEmployer.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
  }

  passDataToParent() {
    this.props.handleExperienceData(this.state.workField, this.state.employerName, this.state.dateOfConcurrence)
  }

  handleWorkField(e) {
    this.setState({
      workField: e.target.value
    }, () => this.passDataToParent())
  }

  handleEmployer(e) {
    this.setState({
      employerName: e.target.value
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
    const {workField, employerName, dateOfConcurrence} = this.state
    return (
      <div className="form-fields">
        <input type="text" 
        value={workField}
        className='work-field'
        placeholder='Work field'
        onChange={this.handleWorkField}/>
        <input type="text" 
        value={employerName}
        className='employer-name'
        placeholder='Employer'
        onChange={this.handleEmployer}/>
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
