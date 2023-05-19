import React, { Fragment } from 'react';
import { Box } from '@mui/material';
import { currentUserProfileQuery } from '../../relayGraphQL/Queries/currentUserProfile'; 
import {  usePreloadedQuery } from 'react-relay/hooks';
import Profile from './Profile';
import RefetchProfile from './RefetchProfile';
import EmptyData from './EmptyData';

const ProfileContainer = ({ queryReference, loadNewData, reFetch }) => {
  const data = usePreloadedQuery(currentUserProfileQuery, queryReference);
  const { currentUser } = data; 
  
  const handleReFetch = (e) => {
    e.preventDefault();
    reFetch();
  }

  return (
    <Fragment>
      {currentUser === null ? 

      <EmptyData handleReFetch={handleReFetch} errMessage={'No user associated with provided Flexhire API Key'}/>
      : 
      currentUser === undefined ? 
       <EmptyData handleReFetch={handleReFetch} errMessage={'Please check your network connection and try again'}/>
      :
      <Box sx={{ minHeight: '400px',display:'flex', flexDirection: 'column'}}>
        <Profile currentUser={currentUser} loadNewData={loadNewData}/>
        <RefetchProfile loadNewData={loadNewData} />
      </Box>
    }
    </Fragment>
    
  );
};

export default ProfileContainer;
