import React from 'react';
import uniqid from 'uniqid';

export const Skills = ({handleSkills, skills, addNewSkill}) => {
  const appendInputs = () => {
    let count = 0
    return skills.map(() => 
            <input type='text'
              className='skill-input'
              placeholder='Skill example'
              id={count++}
              key={uniqid()}
              defaultValue={skills[count-1]}
              onBlur={handleSkills}/>)
    }

  return (
    <div className="form-fields">
      {appendInputs()}
      <button className="new-skill-button"
        onClick={addNewSkill}> 
        New skill
      </button>
    </div>
  )
}
