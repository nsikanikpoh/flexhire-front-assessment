import React  from 'react'
import { Box, Grid, Button, Typography } from '@mui/material';
import JobSkills from './JobSkills';
import { truncateString } from '../../utils/utilities';
import useStyles from '../../styles/styles';
import ContractReqAnswers from './JobContractReqAnswers';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

export default function JobNodeFreelancerRate({node}){
    const classes = useStyles();
    
    const data =  useFragment(graphql`
         fragment JobNodeFreelancerRate_node on Job {
            freelancerRate{
                value
                currency{
                    symbol
                }
            }
    }
`, node);

  return (
    <React.Fragment>
        <Typography variant='h5'
            className={classes.jobTitle}> 
            {node.title} - {data.freelancerRate?.currency?.symbol}
            {data.freelancerRate?.value}/{node.rateMode}
        </Typography>
    </React.Fragment>
        
  )
}
