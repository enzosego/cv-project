import "./styles/App.css";
import "./styles/Form-style.css";
import "./styles/Preview.css";
import React, { useState } from "react";
import { PersonalInfo } from "./components/Personal-info";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Preview } from "./components/Preview";

export const App = () => {
  const [personalData, setPersonalData] = 
    useState({
      name: ['', ''],
      mail: '',
      number: '',
      about: '',
      whyFit: ''
    });
  const [educationData, setEducationData] = 
    useState([
      {
        title: '',
        institution: '',
        educationDate: ['', ''],
        ongoing: false
      }
    ]);
  const [experienceData, setExperienceData] = 
    useState([
      {
        field: '',
        employer: '',
        fieldDate: ['', ''],
        ongoing: false
      }
    ]);
  const [skills, setSkills] = useState(() => ['']);
  const [showPreview, switchShowPreview] = useState(() => false);

  const switchOngoing = (index, targetObject) => {
    if (targetObject === 'educationData') {
      let newData = [...educationData];
      newData[index].ongoing = !newData[index].ongoing;
      setEducationData(newData);
    } 
    else {
      let newData = [...experienceData];
      newData[index].ongoing = !newData[index].ongoing;
      setExperienceData(newData);
    } 
  }

  const handlePersonalData = (propertyToChange, value, index) => {
    let newData = {...personalData};
    if (index != null) newData[propertyToChange][index] = value;
    else newData[propertyToChange] = value;
    setPersonalData(newData);
  }

  const handleEducationData = (index, propertyToChange, value) => {
    let newData = [...educationData];
    if (index.length > 1) {
      const objectContainerIndex = +index.slice(0, 1);
      const variableIndex = +index.slice(1);
      newData[objectContainerIndex][propertyToChange][variableIndex] = value;
    } else {
      newData[index][propertyToChange] = value;
    }
    setEducationData(newData);
  }

  const addNewEducationField = () => {
    setEducationData(prevData => prevData.concat([
      {
        title: '', 
        institution: '', 
        educationDate: ['', ''],
        ongoing: false
      }
    ]));
  }

  const handleExperienceData = (index, propertyToChange, value) => {
    let newData = [...experienceData];
    if (index.length > 1) {
      const objectContainerIndex = +index.slice(0, 1);
      const variableIndex = +index.slice(1);
      newData[objectContainerIndex][propertyToChange][variableIndex] = value;
    } else {
      newData[index][propertyToChange] = value;
    }
    setExperienceData(newData);
  }

  const addNewExperienceField = () =>
    setExperienceData(prevData => prevData.concat([
      {
        field: '',
        employer: '',
        fieldDate: ['', ''],
        ongoing: false
      }
    ]));

  const handleSkills = e => {
    let newSkills = [...skills];
    newSkills[e.target.id] = e.target.value;
    setSkills(newSkills);
  }

  const addNewSkill = () =>
    setSkills(prevSkills => prevSkills.concat(['']));

  const switchPreview = () =>
    switchShowPreview(prevValue => !prevValue);

  const handleForms = () => {
    if (!showPreview) return (
      <div className="form-container">
        <h1 className='form-titles'>Personal information:</h1>
        <PersonalInfo handlePersonalData={handlePersonalData}
          personalData={personalData}/>
        <div className="separator"></div>
        <h1 className='form-titles'>Educational information:</h1>
        <Education handleEducationData={handleEducationData} 
          educationData={educationData}
          addNewEducationField={addNewEducationField}
          switchOngoing={switchOngoing}/>
        <div className="separator"></div>
        <h1 className="form-titles">Working Experience:</h1>
        <Experience handleExperienceData={handleExperienceData} 
          experienceData={experienceData}
          addNewExperienceField={addNewExperienceField}
          switchOngoing={switchOngoing}/>
        <div className="separator"></div>
        <h1 className="form-titles">Share your main skills:</h1>
        <Skills 
          handleSkills={handleSkills}
          skills={skills}
          addNewSkill={addNewSkill}/>
      </div>
    );
    return '';
  }

  return (
    <div className="App">
      <div className="main-container">
        <div className="top-bar">
          <h1>CV Maker</h1>
          <h2 className='switch-preview-title'>Preview</h2>
          <div className="switch-container">
            <input type="checkbox" className='switch-preview' onChange={switchPreview}/>
          </div>
        </div>
        {handleForms()}
      </div>
      <Preview showPreview={showPreview}
        personalData={personalData}
        educationData={educationData}
        experienceData={experienceData}
        skills={skills}/>
    </div>
  );
}
