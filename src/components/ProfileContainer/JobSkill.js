import React from 'react'
import {Box} from '@mui/material';
import useStyles from '../../styles/styles';
import { StyledTooltip } from '../MuiComponents';

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