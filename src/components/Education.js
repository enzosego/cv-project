import React from "react";
import uniqid from 'uniqid';

export const Education = ({handleEducationData, educationData, addNewEducationField, switchOngoing}) => {
  
  const handleChange = e => {
    const index = +e.target.id.slice(-1);
    const variableToChange = e.target.id.slice(0, -1);
    const value = e.target.value;
    handleEducationData(index, variableToChange, value);
  }

  const handleDate = e => {
    const index = e.target.id.slice(-2);
    const variableToChange = e.target.id.slice(0, -2);
    const value = e.target.value;
    handleEducationData(index, variableToChange, value);
  }

  const addNewForm = () => {
    const formCount = educationData.length;
    if (formCount >= 3) return;
    addNewEducationField();
  }

  const appendAdditionalForms = () => {
    const formCount = educationData.length;
    if (formCount === 1) return
    let additinalFormsArray = [];

    for (let i = 1; i < formCount; i++) {
      const {title, institution, educationDate, ongoing} = educationData[i];
      additinalFormsArray.push(
        <div className="form-fields" key={uniqid()}>
          <input type="text" 
              id={`title${i}`}
              className='title-name' 
              placeholder='Enter your title'
              defaultValue={title}
              onBlur={handleChange}/>
            <input type="text" 
              id={`institution${i}`}
              className='institution-name' 
              placeholder='Institution'
              defaultValue={institution}
              onBlur={handleChange}/>
            <input type="date" 
              id={`educationDate${i}0`}
              className='start-date'
              defaultValue={educationDate[0]}
              onBlur={handleDate}/>
            <input type="date" 
              id={`educationDate${i}1`}
              className='end-date'
              defaultValue={educationDate[1]}
              onBlur={handleDate}/>
            <input type="checkbox" 
              className='switch-ongoing-checkbox'
              checked={ongoing}
              onChange={() => switchOngoing(i, 'educationData')}/>
        </div>
      )
    }
    return additinalFormsArray;
  }

  const {title, institution, educationDate, ongoing} = educationData[0];
  return(
      <div className="form-fields" key={uniqid}>
        <input type="text" 
          id='title0'
          className='title-name' 
          placeholder='Enter your title'
          defaultValue={title}
          onBlur={handleChange}/>
        <input type="text" 
          id='institution0'
          className='institution-name' 
          placeholder='Institution'
          defaultValue={institution}
          onBlur={handleChange}/>
        <input type="date" 
          id='educationDate00'
          className='start-date'
          defaultValue={educationDate[0]}
          onBlur={handleDate}/>
        <input type="date" 
          id='educationDate01'
          className='end-date'
          defaultValue={educationDate[1]}
          onBlur={handleDate}/>
        <input type="checkbox"
          className='switch-ongoing-checkbox'
          checked={ongoing}
          onChange={() => switchOngoing(0, 'educationData')}/>
        {appendAdditionalForms()}
        <button onClick={addNewForm} className='new-education-form-button'>Add education</button>
      </div>
    )
}
