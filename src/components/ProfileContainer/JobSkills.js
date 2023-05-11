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

export default function JobSkills({node }){
    const classes = useStyles();
    const data =  useFragment(graphql`
         fragment JobSkills_node on Job {
          jobSkills{
            required
            requiredYears
            skill{
              id
              name
            }
          }
        }
`, node);

  return (
    <React.Fragment>
        <Box className={classes.jobSkillContainer}>
                {
                  data?.jobSkills?.map((jobSkill, index) =>(
                    <StyledTooltip  
                      title={`${jobSkill.skill.name} ${jobSkill.requiredYears} yrs ${jobSkill.required ? 'required' : ''}`} 
                       placement='bottom' key={index}>
                      <Box key={jobSkill.skill.id} className={classes.skillBox}>
                        {jobSkill.skill.name}
                      </Box>
                    </StyledTooltip>
                  ))
                }
              </Box>
    </React.Fragment>
        
  )
}
