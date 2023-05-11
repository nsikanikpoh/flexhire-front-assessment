import React, {useState} from 'react';
import { Grid, Button, InputLabel, FormControl, Box, TextField, Alert } from '@mui/material';
import useStyles from '../../styles/styles';
import { currentUserProfileQuery } from '../../relayGraphQL/Queries/currentUserProfile'; 
import {  usePreloadedQuery } from 'react-relay/hooks';
import Profile from './Profile';

const ProfileContainer = ({ preloadedQuery, loadNewData }) => {
  const classes = useStyles();
  const [apiKey, setApiKey ] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const [formError, setFormError] = useState(false);
  const data = usePreloadedQuery(currentUserProfileQuery, preloadedQuery);
  const { currentUser } = data; 

  const handleSubmit = (e) => {
    e.preventDefault();
   if(apiKey.length < 14){
      setFormError(!formError)
      setErrorMessage('Please enter a valid Flexhire API key')
      setTimeout(()=>{
        setFormError(false);
        setErrorMessage('');
      }, 5000);
   }else{
      //send API call
      loadNewData(apiKey);
   }
  }
  
  return (
    <Box sx={{ minHeight: '400px',display:'flex', flexDirection: 'column'}}>
      
      <Profile currentUser={currentUser} />
      <br/>

      <Box sx={{flexGrow: 1, display:'flex', flexDirection:'column'}}>
      <Alert severity="warning" style={{visibility: `${formError ? 'visible' : 'hidden'}`, height:'50px', width:'47%'}}>{errorMessage}</Alert>
          <InputLabel>Enter API key</InputLabel>
          <FormControl sx={{ mb: 1, width: '50%' }}>
            <TextField type='text' 
            name="apiKey"
                placeholder='Enter API key' value={apiKey} 
                onChange={(e)=>setApiKey(e.target.value)}
            />
          </FormControl>
          <Button sx={{padding: '12px', ':hover': {bgcolor: "#5e5e5e",color: "white"}, gap: '16px',width:'120px',height: '48px',background: '#07AA1F',
                        borderRadius: '4px', textTransform:'none',color: '#FFFFFF', fontStyle: 'normal',fontWeight: 'bold',fontSize: '16px',textAlign: 'center',letterSpacing: '0.02em',                        }}
            onClick={handleSubmit}
            data-cy="apiKey-btn"
          >
                    Submit
            </Button>
      </Box>
    </Box>
  );
};

export default ProfileContainer;
