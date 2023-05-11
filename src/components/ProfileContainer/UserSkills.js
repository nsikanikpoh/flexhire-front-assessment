import React from 'react'
import {Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import useStyles from '../../styles/styles';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

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
                  data?.userSkills?.map((userSkill) =>(
                    <StyledTooltip key={userSkill.id} 
                      title={`${userSkill.skill.name} (skill, ${userSkill.experience + '+ years experience'})`} 
                       placement='bottom'>
                      <Box className={classes.skillBox}>
                        {userSkill.skill.name} {userSkill.experience + '+ yrs'}
                      </Box>
                    </StyledTooltip>
                  ))
                }
              </Box>
    </React.Fragment>
        
  )
}
