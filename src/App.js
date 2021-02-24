import "./styles/App.css";
import "./styles/Form-style.css";
import "./styles/Preview.css";
import React, { Component } from "react";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { PersonalInfo } from "./components/Personal-info";
import { Preview } from "./components/Preview";
import { Skills } from "./components/Skills";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalData: {
        name: '',
        mail: '', 
        number: '', 
        about: '', 
        whyFit: ''
      },
      educationData: {
        title: '', 
        institution: '', 
        educationDate: ['', '']
      },
      experienceData: {
        field: '',
        employer: '', 
        fieldDate: ['', ''], 
      },
      skills: [''],
      showPreview: false,
    };

    this.handlePersonalData = this.handlePersonalData.bind(this);
    this.handleEducationData = this.handleEducationData.bind(this);
    this.handleExperienceData = this.handleExperienceData.bind(this);
    this.handleSkills = this.handleSkills.bind(this);
    this.addNewSkill = this.addNewSkill.bind(this);
  }

  handleForms = (showPreview = this.state.showPreview) => {
    const {personalData, educationData, experienceData, skills} = this.state;
    if (!showPreview) return (
      <div className="form-container">
        <PersonalInfo handlePersonalData={this.handlePersonalData}
          personalData={personalData}/>
        <Education handleEducationData={this.handleEducationData} 
          educationData={educationData}/>
        <Experience handleExperienceData={this.handleExperienceData} 
          experienceData={experienceData}/>
        <Skills 
          handleSkills={this.handleSkills}
          skills={skills}
          addNewSkill={this.addNewSkill}/>
      </div>
    );
    return '';
  }

  handlePersonalData = (firstName, lastName, eMail, phoneNumber, aboutInput, whyFitInput) => {
    this.state.personalData.name = [firstName, lastName];
    this.state.personalData.mail = eMail;
    this.state.personalData.number = phoneNumber;
    this.state.personalData.about = aboutInput;
    this.state.personalData.whyFit = whyFitInput;
    this.setState({
        personalData: this.state.personalData,
      }, () => console.log(this.state.personalData)
    );
  }

  handleEducationData = (titleName, institutionName, dateOfConcurrence) => {
    this.state.educationData.title = titleName;
    this.state.educationData.institution = institutionName;
    this.state.educationData.date = dateOfConcurrence;
    this.setState({
        educationData: this.state.educationData,
      }, () => console.log(this.state.educationData)
    );
  }

  handleExperienceData = (workField, employerName, dateOfConcurrence) => {
    this.state.experienceData.field = workField;
    this.state.experienceData.employer = employerName;
    this.state.experienceData.date = dateOfConcurrence;
    this.setState({
        experienceData: this.state.experienceData,
      }, () => console.log(this.state.experienceData)
    );
  }

  handleSkills = e => {
    this.state.skills[e.target.id] = e.target.value
    this.setState({
      skills: this.state.skills
    });
    console.log(this.state.skills);
  }

  addNewSkill = () => {
    this.setState({
      skills: this.state.skills.concat([''])
    }, () => console.log(this.state.skills))
  }

  switchPreview = () => {
    this.setState({
      showPreview: !this.state.showPreview
    });
  }

  render() {
    const {personalData, educationData, experienceData, skills, showPreview} = this.state
    return (
      <div className="App">
        <div className="main-container">
          <div className="top-bar">
            <h1>CV Maker</h1>
            <div className="switch-container">
              <input type="checkbox" className='switch-preview' onChange={this.switchPreview}/>
            </div>
          </div>
          {this.handleForms()}
        </div>
        <Preview showPreview={showPreview}
          personalData={personalData}
          educationData={educationData}
          experienceData={experienceData}
          skills={skills}/>
      </div>
    );
  }
}

export default App;
