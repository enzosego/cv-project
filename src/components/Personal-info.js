import React from "react"

export const PersonalInfo = ({handlePersonalData, personalData}) => {
  const {name, mail, number, about, whyFit} = personalData;

  const handleChange = e => {
    let propertyToChange = e.target.id;
    const value = e.target.value;
    handlePersonalData(propertyToChange, value)
  }

  const handleName = e => {
    const value = e.target.value;
    const propertyToChange = e.target.id.slice(0, -1);
    const index = +e.target.id.slice(-1);
    handlePersonalData(propertyToChange, value, index)
  }

  return(
      <div className="form-fields">
        <input type="text" 
          id='name0'
          className='names'
          defaultValue={name[0]}
          placeholder='Enter your first name'
          onBlur={handleName}/>
        <input type="text" 
          id='name1'
          className="names"
          defaultValue={name[1]}
          placeholder='Enter your last name'
          onBlur={handleName}/>
        <input type="email" 
          id='mail'
          className="secondary-info"
          defaultValue={mail}
          placeholder='Enter your e-mail'
          onBlur={handleChange}/>
        <input type="text" 
          id='number'
          className="secondary-info"
          defaultValue={number}
          placeholder='Enter your phone number'
          onBlur={handleChange}/>
        <textarea cols="62"
          id='about'
          defaultValue={about}
          rows="5" 
          placeholder='Tell us about yourself.'
          onBlur={handleChange}>
        </textarea>
        <textarea cols="62" 
          id='whyFit'
          defaultValue={whyFit}
          rows="5" 
          placeholder='Tell us why are you a good fit for our company.'
          onBlur={handleChange}>
        </textarea>
      </div>
    )
}
