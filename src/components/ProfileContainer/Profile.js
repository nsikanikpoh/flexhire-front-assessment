import React from 'react';
import { Grid, Box, } from '@mui/material';
import useStyles from '../../styles/styles';
import Map from './Map';
import ProfileInfo from './ProfileData';
import UserSkills from './UserSkills';
import Tabs from './Tabs';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

const Profile = ({ currentUser }) => {
  const classes = useStyles();
 const data =  useFragment(graphql`
        fragment Profile_user on User {
            profile {
                id
              fullAddress
              jobTypes
              locationLatitude
              locationLongitude
              textIntroduction
              totalExperience
              rateMode
              freelancerRate {
                value
                currency {
                  symbol
                }
              }
              freelancerType {
                id
                name
                skills {
                  id
                  name
                  slug
                }
              }
          }
      }
 `, currentUser);

  return (
    <Box sx={{ minHeight: '400px',display:'flex', flexDirection: 'column'}}>
      <Map profile={data?.profile}  />
      <Box className={classes.profileContainer}>
          <ProfileInfo name={currentUser?.name} avatarUrl={currentUser?.avatarUrl} profile={data?.profile}/>
          <UserSkills currentUser={currentUser} />
          <Tabs currentUser={currentUser}/>
      </Box>
    </Box>
  );
};

export default Profile;
