import React, { useTransition, useEffect, useState } from 'react';
import { Grid, Box, } from '@mui/material';
import useStyles from '../../styles/styles';
import Map from './Map';
import ProfileData from './ProfileData';
import UserSkills from './UserSkills';
import Tabs from './Tabs';
import { useRefetchableFragment } from 'react-relay';
import consumer from '../../webhookEvent/cable';
import { profileUserFragment } from '../../relayGraphQL/Queries/profileUserFragment';

const Profile = ({ currentUser, loadNewData }) => {
  const classes = useStyles();
  const [isPending, startTransition] = useTransition();
 const [data, refresh] = useRefetchableFragment(profileUserFragment, currentUser);

 const [webhookData, setWebhookData] = useState({event_name:'',timestamp:'', records:[]});

 useEffect(() => {
   consumer.subscriptions.create({
     channel: 'FlexhireWebhookChannel'
   }, {
     connected: () => console.log('connected'),
     disconnected: () => console.log('disconnected'),
     received: (data) => {
       console.log('ON_RECEIVED', data);
       setWebhookData({event_name:data.event_name, timestamp:data.timestamp, records:data.records})
     }
   }) 
   // On component unmount, the returned function will be invoked.
   return () => {
     consumer.disconnect();
   }
 }, [])
 
 
 useEffect(()=>{
  if(webhookData.records.includes(data?.profile?.id)){
    startTransition(()=>{
      refresh({}, { fetchPolicy: 'network-only' })
    });
  }
  if(webhookData.records.includes(currentUser?.id)){
      loadNewData()
  }
}, [webhookData.timestamp]);

  return (
    <Box sx={{ minHeight: '400px',display:'flex', flexDirection: 'column'}}>
      <Map locationLongitude={data?.profile?.locationLongitude} 
            locationLatitude={data?.profile?.locationLatitude}/>
      <Box className={classes.profileContainer}>
            <ProfileData name={currentUser?.name} avatarUrl={currentUser?.avatarUrl} 
                    profile={data?.profile} isPending={isPending}/> 
          <UserSkills currentUser={currentUser} webhookData={webhookData} profile={data?.profile}/>
          <Tabs currentUser={currentUser}/>
      </Box>
    </Box>
  );
};

export default Profile;
