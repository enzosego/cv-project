import React from 'react';
import uniqid from 'uniqid';

const skillList = skills => 
  skills.map(skill => <li key={uniqid()}>{skill}</li>)

const previewContainer = (showPreview, personalData, educationData, experienceData, skills) => {
  if (showPreview) {
    const {name, mail, number, about, whyFit} = personalData;
    const {title, institution, educationDate} = educationData;
    const {field, employer, fieldDate} = experienceData;
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
          <div className="experience-education">
              <h2 className='title'>Education Title:</h2>
              <p className="subText">{title}</p>
              <h2 className='title'>Name of Institution:</h2>
              <p className="subText">{institution}</p>
              <h2 className='title'>Time of concurrence:</h2>
              <p className="subText">{educationDate[0]} {educationDate[1]}</p>
              <h2 className="title">Work experience:</h2>
              <p className="subText">{field}</p>
              <h2 className="title">Employer:</h2>
              <p className="subText">{employer}</p>
              <h2 className='title'>Time of concurrence:</h2>
              <p className="subText"><strong>{fieldDate[0]}</strong> to <strong>{fieldDate[1]}</strong></p>
          </div>
        </div>
      </div>
      )
  } else return '';
}

export const Preview = ({personalData, educationData, experienceData, skills, showPreview}) => 
  previewContainer(showPreview, personalData, educationData, experienceData, skills);
