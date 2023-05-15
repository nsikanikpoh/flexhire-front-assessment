import React from 'react'
import {Box} from '@mui/material';
import useStyles from '../../styles/styles';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import JobSkill from './JobSkill';

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
                    <JobSkill jobSkill={jobSkill} key={index}/>
                  ))
                }
              </Box>
    </React.Fragment>
        
  )
}
