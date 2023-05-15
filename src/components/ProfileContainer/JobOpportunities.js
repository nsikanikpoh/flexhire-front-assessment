import React, { Fragment, useState, useEffect }  from 'react'
import { Box, Grid } from '@mui/material';
import useStyles from '../../styles/styles';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import JobNode from './JobNode';
import DisplayEmpty from './DisplayEmpty';
import { isEmpty } from '../../utils/utilities';

export default function JobOpportunities({currentUser, isClicked}){
    const classes = useStyles();
    const [ edges, setEdges ] = useState([]);
    
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

useEffect(()=>{
  if(!isEmpty(data) && !isEmpty(data.jobOpportunities)){
    setEdges(data.jobOpportunities.edges);
  }
},[data]);

  return (
    <Fragment>
        <Box className={classes.jobContainer}  
        sx={{display: `${isClicked ? 'block' : 'none'}`}}
        data-cy="profile-user-jobs-container"
        >
          {edges.length > 0 ? 
          <Fragment>
              {edges.map((edge, ind) => (
                <Fragment key={ind}>
                     <Grid container spacing={3} className={classes.jContGrid}>
                        <Grid item md={12}>
                          <JobNode edge={edge}/>
                        </Grid>
                    </Grid>
                    <br/><br/>
                  </Fragment>
              ))}
          </Fragment>: 
          <DisplayEmpty title='job contracts'/>}
                       
        </Box>
    </Fragment>
        
  )
}
