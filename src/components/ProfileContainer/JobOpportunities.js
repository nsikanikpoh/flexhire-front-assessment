import React  from 'react'
import { Box, Grid, Button, Typography } from '@mui/material';
import JobSkills from './JobSkills';
import { truncateString } from '../../utils/utilities';
import useStyles from '../../styles/styles';
import ContractReqAnswers from './JobContractReqAnswers';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import JobNode from './JobNode';

export default function JobOpportunities({currentUser, isClicked}){
    const classes = useStyles();
    
    const data =  useFragment(graphql`
    fragment JobOpportunities_user on User {
        jobOpportunities(first: 20){
            edges{
              cursor
              ...JobNode_edges
            }
        } 
     }
`, currentUser);

  return (
    <React.Fragment>
        <Box className={classes.jobContainer}  
        sx={{display: `${isClicked ? 'block' : 'none'}`}}
        data-cy="profile-user-jobs-container"
        >
            {data?.jobOpportunities?.edges?.map((edge, ind) => (
              <React.Fragment>
                <Grid container key={ind} spacing={3} className={classes.jContGrid}>
                      <Grid item md={12}>
                        <JobNode edge={edge}/>
                      </Grid>
                  </Grid>
                  <br/><br/>
                </React.Fragment>
            ))}           
        </Box>
    </React.Fragment>
        
  )
}
