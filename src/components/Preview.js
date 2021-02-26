import React from 'react';
import uniqid from 'uniqid';

const skillList = skills => 
  skills.map(skill => <li key={uniqid()}>{skill}</li>)

const appendingDates = (startDate, endDate, ongoingCondition) => 
  ongoingCondition
    ? <p className="subText">{startDate} - ongoing</p>
    : <p className="subText">{startDate} - {endDate}</p>

const appendingAdditionalEducation = (educationData) => {
  if (educationData.length === 1) return '';
  let additionalEducationArray = [];
  
  for (let i = 1; i < educationData.length; i++) {
    const {title, institution, educationDate, ongoing} = educationData[i];
    additionalEducationArray.push(
      <div className="additional-education" key={uniqid()}>
        <h2 className='title'>Education Title:</h2>
        <p className="subText">{title}</p>
        <h2 className='title'>Name of Institution:</h2>
        <p className="subText">{institution}</p>
        <h2 className='title'>Time of concurrence:</h2>
        {appendingDates(educationDate[0], educationDate[1], ongoing)}
      </div>
    )
  }
  return additionalEducationArray;
}

const appendAdditionalExperince = (experienceData) => {
  if (experienceData.length === 1) return '';
  let additionalExperienceArray = [];

  for (let i = 1; i < experienceData.length; i++) {
    const {field, employer, fieldDate, ongoing} = experienceData[i];
    additionalExperienceArray.push(
      <div className="additional-experience" key={uniqid()}>
        <h2 className="title">Work experience:</h2>
        <p className="subText">{field}</p>
        <h2 className="title">Employer:</h2>
        <p className="subText">{employer}</p>
        <h2 className='title'>Time of concurrence:</h2>
        {appendingDates(fieldDate[0], fieldDate[1], ongoing)}
      </div>
    )
  }
  return additionalExperienceArray;
}


const previewContainer = (showPreview, personalData, educationData, experienceData, skills) => {
  if (showPreview) {
    const {name, mail, number, about, whyFit} = personalData;
    const {title, institution, educationDate} = educationData[0];
    const {field, employer, fieldDate} = experienceData[0];
    return (
      <div className="preview-container">
        <div className="sidebar">
          <div className="personal-info">
            <h1 className="name">{name[0]} {name[1]}</h1>
            <h3>E-mail</h3>
            <p className="subText">{mail}</p>
            <h3>Phone number</h3>
            <p className="subText">{number}</p>
          </div>
          <div className="about">
            <h2>About Myself</h2>
            <p>{about}</p>
          </div>
          <div className="skills">
            <h2>My main skills</h2>
            <ul>
              {skillList(skills)}
            </ul>
          </div>
        </div>
        <div className="main-content">
          <div className="why-fit">
            <h2 className='title'>Why am i a good fit?</h2>
            <p className="subText">{whyFit}</p>
          </div>
          <div className="education-experience-container">
            <div className="education">
              <h2 className='title'>Education Title:</h2>
              <p className="subText">{title}</p>
              <h2 className='title'>Name of Institution:</h2>
              <p className="subText">{institution}</p>
              <h2 className='title'>Time of concurrence:</h2>
              {appendingDates(educationDate[0], educationDate[1], educationData[0].ongoing)}
              {appendingAdditionalEducation(educationData)}
            </div>
            <div className="experience">
              <h2 className="title">Work experience:</h2>
              <p className="subText">{field}</p>
              <h2 className="title">Employer:</h2>
              <p className="subText">{employer}</p>
              <h2 className='title'>Time of concurrence:</h2>
              {appendingDates(fieldDate[0], fieldDate[1], experienceData[0].ongoing)}
              {appendAdditionalExperince(experienceData)}
            </div>
          </div>
        </div>
      </div>
      )
  } else return '';
}

export const Preview = ({personalData, educationData, experienceData, skills, showPreview}) => 
  previewContainer(showPreview, personalData, educationData, experienceData, skills);
