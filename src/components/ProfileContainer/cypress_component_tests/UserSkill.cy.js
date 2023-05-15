import React from 'react'
import UserSkill from '../UserSkill'

describe('<UserSkill />', () => {
  it('renders', () => {
    const userSkill = {
        "id": "dXNlcl9za2lsbHMtMTQ2NzE2Nw==",
        "experience": 5,
        "skill": {
          "id": "c2tpbGxzLTM=",
          "name": "Ruby",
          "slug": "ruby"
        }
      }
    
    cy.mount(<UserSkill userSkill={userSkill}/>)
    cy.contains(`${userSkill.skill.name} ${userSkill.experience} + '+ yrs'`);
  })
})