import React, { useEffect, useState, Fragment, useTransition } from 'react'
import { Box } from '@mui/material';
import useStyles from '../../styles/styles';
import { useRefetchableFragment } from 'react-relay';
import LinearLoader from '../Loaders/LinearLoader';
import graphql from 'babel-plugin-relay/macro';
import UserSkill from './UserSkill';
import simulateWebhookEvent from '../../webhookEvent/simulateWebhookEvent';
import SnackbarAlert from '../Alerts/SnapBar';
import { StyledButton } from '../MuiComponents';

export default function UserSkills({ currentUser, webhookData, profile }){
  const classes = useStyles();
  const [snapAlert, setSnapAlert] = useState({isOpen:false, isError:false, message:''});
  const [isPending, startTransition] = useTransition();
  const [data, refresh] = useRefetchableFragment(graphql`
            fragment UserSkills_user on User @refetchable(queryName: "UserSkillsRefetchQuery") {
                userSkills {
                  id
                  experience
                  skill {
                    id 
                    name
                    slug        
                  }
               }
            }`, currentUser);
  

useEffect(()=>{
  if(webhookData.records.includes(currentUser.id)){
    startTransition(()=>{
      refresh({}, { fetchPolicy: 'network-only' })
    });
  }
}, [webhookData.timestamp]);

  const handleWebhookSim = (e) => {
    e.preventDefault();
    simulateWebhookEvent(currentUser.id, profile.id).then((resp)=>{
        setSnapAlert({isOpen:true, isError:false, message: resp.message});
    }).catch(err => {
        setSnapAlert({isOpen:true, isError:true, message:err.message});
    });
  }

  const clearSnapAlert = () => {
    setSnapAlert({isOpen:false, isError:false, message:''});
  }


  return (
    <Fragment>
       <SnackbarAlert message={snapAlert.message} 
                        isOpen={snapAlert.isOpen} isError={snapAlert.isError} 
                        clearSnapAlert={clearSnapAlert}/>
        <Box className={classes.skillContainer}>
            {isPending ? <LinearLoader /> : 
              <Fragment>
                {
                    data?.userSkills?.map((userSkill, ind) =>(
                      <UserSkill userSkill={userSkill} key={ind}/>
                    ))
                  }
              </Fragment>
            }
        </Box>
            <StyledButton sx={{width:'auto', ':hover': { bgcolor: "#21ba45",color: "#fff"}}}
                onClick={handleWebhookSim}
              >
                        Simulate Webhook Event
            </StyledButton>
    </Fragment>
        
  )
}
