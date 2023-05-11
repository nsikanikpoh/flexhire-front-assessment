import React from 'react'
import { isEmpty } from '../../utils/utilities';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import Answers from './Answers';
import { Box } from '@mui/material';
import useStyles from '../../styles/styles';

export default function UserAnswers({currentUser, isClicked}){
  const classes = useStyles();

  const data =  useFragment(graphql`
     fragment UserAnswers_user on User {
        answers {
            id
            available
            createdAt          
            optimizedUrl
            posterUrl
            public
            url
            question{
                id
                description
                title
              }          
          } 
      }
 `, currentUser);

  return (
    <React.Fragment>
       <Box className={classes.answerContainer}
        data-cy="profile-user-answers-container"  
        sx={{display: `${isClicked ? 'block' : 'none'}`}}>
        {
          !isEmpty(data) ? <Answers answers={data.answers}/> : ''
        }
       </Box>
    </React.Fragment>
        
  )
}
