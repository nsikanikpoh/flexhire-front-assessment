import React from 'react'
import { styled } from '@mui/material/styles';
import {Box} from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import useStyles from '../../styles/styles';

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',maxHeight: 'none', fontWeight:'bold', p:2,
  },
});

function JobSkill({jobSkill}) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <StyledTooltip  
                title={`${jobSkill.skill.name} ${jobSkill.requiredYears} yrs ${jobSkill.required ? 'required' : ''}`} 
                placement='bottom'>
                <Box key={jobSkill.skill.id} className={classes.skillBox}>
                    {jobSkill.skill.name}
                </Box>
            </StyledTooltip>
        </React.Fragment>
    )
}

export default JobSkill