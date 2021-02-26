import React from "react"
import uniqid from 'uniqid';

export const Experience = ({handleExperienceData, experienceData, addNewExperienceField, switchOngoing}) => {

  const handleChange = e => {
    const index = +e.target.id.slice(-1);
    const variableToChange = e.target.id.slice(0, -1);
    const value = e.target.value;
    handleExperienceData(index, variableToChange, value);
  }

  const handleDate = e => {
    const index = e.target.id.slice(-2);
    const variableToChange = e.target.id.slice(0, -2);
    const value = e.target.value;
    handleExperienceData(index, variableToChange, value);
  }

  const addNewForm = () => {
    const formCount = experienceData.length;
    if (formCount >= 3) return;
    addNewExperienceField();
  }

  const appendAdditionalForms = () => {
    const formCount = experienceData.length;
    if (formCount === 1) return
    let additinalFormsArray = [];

    for (let i = 1; i < formCount; i++) {
      const {field, employer, fieldDate, ongoing} = experienceData[i];
      additinalFormsArray.push(
        <div className="form-fields" key={uniqid()}>
          <input type="text" 
              id={`field${i}`}
              className='work-field'
              placeholder='work field'
              defaultValue={field}
              onBlur={handleChange}/>
            <input type="text" 
              id={`employer${i}`}
              className='employer-name'
              placeholder='employer'
              defaultValue={employer}
              onBlur={handleChange}/>
            <input type="date" 
              id={`fieldDate${i}0`}
              className='start-date'
              defaultValue={fieldDate[0]}
              onBlur={handleDate}/>
            <input type="date" 
              id={`fieldDate${i}1`}
              className='end-date'
              defaultValue={fieldDate[1]}
              onBlur={handleDate}/>
            <input type="checkbox"
              className='switch-ongoing-checkbox'
              checked={ongoing}
              onChange={() => switchOngoing(i, 'experienceData')}/>
        </div>
      )
    }
    return additinalFormsArray;
  }

  const {field, employer, fieldDate, ongoing} = experienceData[0];
  return(
    <div>
      <div className="form-fields" key={uniqid()}>
        <input type="text" 
          id='field0'
          className='work-field'
          placeholder='Work field'
          defaultValue={field}
          onBlur={handleChange}/>
        <input type="text" 
          id='employer0'
          className='employer-name'
          placeholder='Employer'
          defaultValue={employer}
          onBlur={handleChange}/>
        <input type="date" 
          id='fieldDate00'
          className='start-date'
          defaultValue={fieldDate[0]}
          onBlur={handleDate}/>
        <input type="date" 
          id='fieldDate01'
          className='end-date'
          defaultValue={fieldDate[1]}
          onBlur={handleDate}/>
        <input type="checkbox"
          className='switch-ongoing-checkbox'
          checked={ongoing}
          onChange={() => switchOngoing(0, 'experienceData')}/>
        {appendAdditionalForms()}
        <button onClick={addNewForm} className='new-education-form-button'>Add experiece</button>
      </div>
    </div>
    )
}
