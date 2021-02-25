import React, {Component} from 'react';
import uniqid from 'uniqid';

export class Education extends Component {
  constructor(props) {
    super(props)

    this.state = {
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

  switchOngoing = (e) => {
    const ongoing = e.target.id;
    this.setState({
      [ongoing]: !this.state[ongoing]
    }, () => console.log(this.state))
  }

  handleChange = e => {
    const index = +e.target.id.slice(-1);
    const variableToChange = e.target.id.slice(0, -1);
    const value = e.target.value;
    this.props.handleEducationData(index, variableToChange, value);
  }

  handleDate = e => {
    const index = e.target.id.slice(-2);
    const variableToChange = e.target.id.slice(0, -2);
    const value = e.target.value;
    this.props.handleEducationData(index, variableToChange, value);
  }

  addNewForm = () => {
    const formCount = this.props.educationData.length;
    if (formCount >= 3) return;
    this.props.addNewEducationField();
  }

  appendAdditionalForms = () => {
    const formCount = this.props.educationData.length;
    if (formCount === 1) return
    let additinalFormsArray = [];

    for (let i = 1; i < formCount; i++) {
      const {title, institution, educationDate} = this.props.educationData[i];
      additinalFormsArray.push(
        <div className="form-fields" key={uniqid()}>
          <input type="text" 
            id={`title${i}`}
            className='title-name' 
            placeholder='Enter your title'
            defaultValue={title}
            onBlur={this.handleChange}/>
            <input type="text" 
            id={`institution${i}`}
            className='institution-name' 
            placeholder='Institution'
            defaultValue={institution}
            onBlur={this.handleChange}/>
            <input type="date" 
            id={`educationDate${i}0`}
            className='start-date'
            defaultValue={educationDate[0]}
            onBlur={this.handleDate}/>
            <input type="date" 
            id={`educationDate${i}1`}
            className='end-date'
            defaultValue={educationDate[1]}
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
    const {title, institution, educationDate} = this.props.educationData[0];
    return (
        <div className="form-fields" key={uniqid}>
          <input type="text" 
          id='title0'
          className='title-name' 
          placeholder='Enter your title'
          defaultValue={title}
          onBlur={this.handleChange}/>
          <input type="text" 
          id='institution0'
          className='institution-name' 
          placeholder='Institution'
          defaultValue={institution}
          onBlur={this.handleChange}/>
          <input type="date" 
          id='educationDate00'
          className='start-date'
          defaultValue={educationDate[0]}
          onBlur={this.handleDate}/>
          <input type="date" 
          id='educationDate01'
          className='end-date'
          defaultValue={educationDate[1]}
          onBlur={this.handleDate}/>
          <button className='ongoing-switch-button'
            id='ongoing1'
            onClick={this.switchOngoing}>
            Ongoing
          </button>
          {this.appendAdditionalForms()}
          <button onClick={this.addNewForm} className='new-education-form-button'>Add education</button>
        </div>
    )
  }
}
