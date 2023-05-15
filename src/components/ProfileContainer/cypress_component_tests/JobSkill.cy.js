import React from 'react'
import JobSkill from '../JobSkill'

describe('<JobSkill />', () => {
  it('renders', () => {
    const jobSkill = {
          "required": true,
          "requiredYears": 3,
          "skill": {
            "id": "c2tpbGxzLTIyNQ==",
            "name": "Agile Software Development"
          }
        }
    
    cy.mount(<JobSkill jobSkill={jobSkill}/>)
    cy.contains(`${jobSkill.skill.name}`);
  })
})