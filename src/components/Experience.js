import React, {Component} from 'react';
import uniqid from 'uniqid';

export class Experience extends Component {
  constructor(props) {
    super(props)

    this.state= {
      ongoing1: false,
      ongoing2: false,
      ongoing3: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.addNewForm = this.addNewForm.bind(this);
    this.appendAdditionalForms = this.appendAdditionalForms.bind(this);
    this.switchOngoing = this.switchOngoing.bind(this);
  }

  switchOngoing = e => {
    const ongoing = e.target.id;
    this.setState({
      [ongoing]: !this.state[ongoing]
    }, () => console.log(this.state))
  }

  handleChange = e => {
    console.log('s')
    const index = +e.target.id.slice(-1);
    const variableToChange = e.target.id.slice(0, -1);
    const value = e.target.value;
    this.props.handleExperienceData(index, variableToChange, value);
  }

  handleDate = e => {
    const index = e.target.id.slice(-2);
    const variableToChange = e.target.id.slice(0, -2);
    const value = e.target.value;
    this.props.handleExperienceData(index, variableToChange, value);
  }

  addNewForm() {
    const formCount = this.props.experienceData.length;
    if (formCount >= 3) return;
    this.props.addNewExperienceField();
  }

  appendAdditionalForms() {
    const formCount = this.props.experienceData.length;
    if (formCount === 1) return
    let additinalFormsArray = [];

    for (let i = 1; i < formCount; i++) {
      const {field, employer, fieldDate} = this.props.experienceData[i];
      additinalFormsArray.push(
        <div className="form-fields" key={uniqid()}>
          <input type="text" 
            id={`field${i}`}
            className='work-field'
            placeholder='work field'
            defaultValue={field}
            onBlur={this.handleChange}/>
            <input type="text" 
            id={`employer${i}`}
            className='employer-name'
            placeholder='employer'
            defaultValue={employer}
            onBlur={this.handleChange}/>
            <input type="date" 
            id={`fieldDate${i}0`}
            className='start-date'
            defaultValue={fieldDate[0]}
            onBlur={this.handleDate}/>
            <input type="date" 
            id={`fieldDate${i}1`}
            className='end-date'
            defaultValue={fieldDate[1]}
            onBlur={this.handleDate}/>
            <button className='ongoing-switch-button'
              id={`ongoing${i+1}`}
              onClick={this.switchOngoing}>
              Ongoing
            </button>
        </div>
      )
    }
    return additinalFormsArray;
  }

  render() {
    const {field, employer, fieldDate} = this.props.experienceData[0]
    return (
      <div className="form-fields" key={uniqid()}>
        <input type="text" 
          id='field0'
          className='work-field'
          placeholder='Work field'
          defaultValue={field}
          onBlur={this.handleChange}/>
          <input type="text" 
          id='employer0'
          className='employer-name'
          placeholder='Employer'
          defaultValue={employer}
          onBlur={this.handleChange}/>
          <input type="date" 
          id='fieldDate00'
          className='start-date'
          defaultValue={fieldDate[0]}
          onBlur={this.handleDate}/>
          <input type="date" 
          id='fieldDate01'
          className='end-date'
          defaultValue={fieldDate[1]}
          onBlur={this.handleDate}/>
          <button className='ongoing-switch-button'
            id='ongoing1'
            onClick={this.switchOngoing}>
            Ongoing
          </button>
        {this.appendAdditionalForms()}
        <button onClick={this.addNewForm} className='new-education-form-button'>Add experiece</button>
      </div>
    )
  }
}
