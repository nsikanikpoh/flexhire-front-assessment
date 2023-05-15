import React from 'react'
import {Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import useStyles from '../../styles/styles';

const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 'none',maxHeight: 'none', fontWeight:'bold', p:2,
    },
});

export default function UserSkill({ userSkill }){
  const classes = useStyles();

  return (
    <React.Fragment>
        <StyledTooltip key={userSkill.id} 
             title={`${userSkill.skill.name} (skill, ${userSkill.experience + '+ years experience'})`} 
                placement='bottom'>
            <Box className={classes.skillBox}>
                {userSkill.skill.name} {userSkill.experience + '+ yrs'}
            </Box>
        </StyledTooltip>
    </React.Fragment>
        
  )
}
