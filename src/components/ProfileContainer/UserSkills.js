import React from 'react'
import {Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import useStyles from '../../styles/styles';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import UserSkill from './UserSkill';

const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 'none',maxHeight: 'none', fontWeight:'bold', p:2,
    },
});

export default function UserSkills({ currentUser }){
  const classes = useStyles();
  const data = useFragment(graphql`
            fragment UserSkills_user on User {
                userSkills {
                  id
                  experience
                  skill {
                    id 
                    name
                    slug        
                  }
               }
            }`, currentUser);

  return (
    <React.Fragment>
        <Box className={classes.skillContainer}>
            {
              data?.userSkills?.map((userSkill, ind) =>(
                <UserSkill userSkill={userSkill} key={ind}/>
              ))
            }
          </Box>
    </React.Fragment>
        
  )
}
