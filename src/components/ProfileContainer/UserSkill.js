import React from 'react'
import {Box} from '@mui/material';
import useStyles from '../../styles/styles';
import { StyledTooltip } from '../MuiComponents';

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
