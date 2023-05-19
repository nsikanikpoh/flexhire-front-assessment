import React  from 'react'
import { Typography } from '@mui/material';
import JobSkills from './JobSkills';
import { truncateString } from '../../utils/utilities';
import useStyles from '../../styles/styles';
import JobContractReqAnswers from './JobContractReqAnswers';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import JobNodeFreelancerRate from './JobNodeFreelancerRate';

export default function JobOpportunities({edge}){
    const classes = useStyles();
    
    const data =  useFragment(graphql`
         fragment JobNode_edges on JobEdge {
              node{
                ...JobSkills_node
                ...JobNodeFreelancerRate_node
                ...JobContractReqAnswers_node
                title
                status
                availabilityType
                autoSendScreeningRequests
                city
                country
                description
                descriptionExperience
                descriptionResponsibilities
                expiresAt
                firm{
                  name
                  description
                }
                user{
                  id
                  email
                  name
                }
                hiringManager{
                  id
                  name
                }
                hiringManagerType
                rateMode
                clientRate{
                  value
                }
              }
          }
        `, edge);

  return (
    <React.Fragment>
        <JobNodeFreelancerRate node={data.node}/>
        <Typography color={'#76889b'}>Status: {data.node.status}</Typography>
        <JobSkills node={data.node} classes={classes}/>
        <Typography color={'#76889b'} textAlign={'justify'} className={classes.introText}>
            {truncateString(data.node.description)}</Typography>
        <Typography color={'#76889b'}> 
            Hiring Manager - <strong>{data.node.user?.name}</strong> works in <strong>{data.node.firm?.name}</strong>
        </Typography>
        <br/>

        <JobContractReqAnswers 
            node={data.node}
        />
    </React.Fragment>
        
  )
}
