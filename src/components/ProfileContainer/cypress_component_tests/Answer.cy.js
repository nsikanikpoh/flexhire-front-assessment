import React from 'react'
import Answer from '../Answer'

describe('<Answer />', () => {
  it('renders', () => {
    const answer = {
      "id": "dmlkZW9zLTU1OTQ=",
      "available": true,
      "createdAt": "2023-04-09T22:32:40-04:00",
      "optimizedUrl": "https://videos.flexhire.com/direct-uploads/2023-04-10-02-33-21-66c5c7ede0cda9028aafee4355f149a7.mp4",
      "posterUrl": "https://cdn.filestackcontent.com/reUKF7pSTQamU1v24wZo",
      "public": true,
      "url": "https://s3.amazonaws.com/flexhire-video-uploads/direct-uploads/2023-04-10-02-33-21-66c5c7ede0cda9028aafee4355f149a7.mp4",
      "question": {
        "id": "cXVlc3Rpb25zLTI=",
        "title": "Describe your local software development environment and the key tools you use.",
        "description": "Shows what the individual feels is important in productivity, quality and engineering practices"
      }
    }
    
    cy.mount(<Answer answer={answer}/>)
    cy.contains("Describe your local software development environment and the key tools you use.");
  })
})