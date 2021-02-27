import "./styles/App.css";
import "./styles/Form-style.css";
import "./styles/Preview.css";
import React, { Component } from "react";
import { PersonalInfo } from "./components/Personal-info";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Preview } from "./components/Preview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalData: {
        name: ['', ''],
        mail: '', 
        number: '', 
        about: '', 
        whyFit: ''
      },
      educationData: [
        {
          title: '', 
          institution: '', 
          educationDate: ['', ''],
          ongoing: false
        }
      ],
      experienceData: [
      {
        field: '',
        employer: '', 
        fieldDate: ['', ''], 
      }
      ],
      skills: [''],
      showPreview: false,
    };

    this.handlePersonalData = this.handlePersonalData.bind(this);
    this.handleEducationData = this.handleEducationData.bind(this);
    this.addNewEducationField = this.addNewEducationField.bind(this);
    this.handleExperienceData = this.handleExperienceData.bind(this);
    this.addNewExperienceField = this.addNewExperienceField.bind(this);
    this.handleSkills = this.handleSkills.bind(this);
    this.addNewSkill = this.addNewSkill.bind(this);
  }

  switchOngoing = (index, targetObject) => {
    this.state[targetObject][index].ongoing = !this.state[targetObject][index].ongoing;
    this.setState({
      [targetObject]: this.state[targetObject]
    }, () => console.log(this.state[targetObject]))
  }

  handleForms = (showPreview = this.state.showPreview) => {
    const {personalData, educationData, experienceData, skills} = this.state;
    if (!showPreview) return (
      <div className="form-container">
        <h1 className='form-titles'>Personal information:</h1>
        <PersonalInfo handlePersonalData={this.handlePersonalData}
          personalData={personalData}/>
        <div className="separator"></div>
        <h1 className='form-titles'>Educational information:</h1>
        <Education handleEducationData={this.handleEducationData} 
          educationData={educationData}
          addNewEducationField={this.addNewEducationField}
          switchOngoing={this.switchOngoing}/>
        <div className="separator"></div>
        <h1 className="form-titles">Working Experience:</h1>
        <Experience handleExperienceData={this.handleExperienceData} 
          experienceData={experienceData}
          addNewExperienceField={this.addNewExperienceField}
          switchOngoing={this.switchOngoing}/>
        <div className="separator"></div>
        <h1 className="form-titles">Share your main skills:</h1>
        <Skills 
          handleSkills={this.handleSkills}
          skills={skills}
          addNewSkill={this.addNewSkill}/>
      </div>
    );
    return '';
  }

  handlePersonalData = (propertyToChange, value, index) => {
    console.log(propertyToChange);
    if (index != null) this.state.personalData[propertyToChange][index] = value;
    else this.state.personalData[propertyToChange] = value
    this.setState({
        personalData: this.state.personalData
      }, () => console.log(this.state.personalData)
    );
  }

  handleEducationData = (index, propertyToChange, value) => {
    const {educationData} = this.state
    if (index.length > 1) {
      const objectContainerIndex = +index.slice(0, 1);
      const variableIndex = +index.slice(1);
      educationData[objectContainerIndex][propertyToChange][variableIndex] = value;
    } else {
      educationData[index][propertyToChange] = value;
    }
    this.setState({
        educationData: this.state.educationData,
      }, () => console.log(this.state.educationData)
    );
  }

  addNewEducationField = () => {
    this.setState({
      educationData: this.state.educationData.concat([
      {
        title: '', 
        institution: '', 
        educationDate: ['', ''],
        ongoing: false
        }
      ])
    }, () => console.log(this.state.educationData));
  }

  handleExperienceData = (index, propertyToChange, value) => {
    const {experienceData} = this.state;
    if (index.length > 1) {
      const objectContainerIndex = +index.slice(0, 1);
      const variableIndex = +index.slice(1);
      experienceData[objectContainerIndex][propertyToChange][variableIndex] = value;
    } else {
      experienceData[index][propertyToChange] = value;
    }
    this.setState({
        experienceData: this.state.experienceData,
      }, () => console.log(this.state.experienceData)
    );
  }

  addNewExperienceField = () => {
    this.setState({
      experienceData: this.state.experienceData.concat([
      {
        field: '',
        employer: '', 
        fieldDate: ['', ''], 
      }
      ])
    }, () => console.log(this.state.experienceData))
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
            <h2 className='switch-preview-title'>Preview</h2>
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
