import React, { useState, Fragment } from 'react';
import { InputLabel, FormControl, Box, Grid, TextField, Alert } from '@mui/material';
import { StyledButton } from '../MuiComponents';

const ProfileContainer = ({ loadNewData }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [formError, setFormError] = useState(false);
  const [apiKey, setApiKey ] = useState('');
  
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
        console.log('loadNewData');
        localStorage.setItem('flexhireApiKey', apiKey)
        loadNewData();
    }
  }

  return (
    <Fragment>
      <Box sx={{flexGrow: 1, display:'flex', flexDirection:'column',  marginBottom: '70px',}}>
        <Alert severity="warning" style={{visibility: `${formError ? 'visible' : 'hidden'}`, height:'50px', width:'47%'}}>{errorMessage}</Alert>
        <Grid container>
          <Grid item xs={'auto'} md={6}>
              <InputLabel>Enter API key</InputLabel>
              <FormControl sx={{ mb: 1, width: '100%' }}>
                <TextField type='text' 
                name="apiKey"
                    placeholder='Enter API key' value={apiKey} 
                    onChange={(e)=>setApiKey(e.target.value)}
                />
              </FormControl>
          </Grid>
          <Grid item xs={'auto'} md={6} sx={{pt:3, pl:1}}>
          
              <StyledButton 
                onClick={handleSubmit}
                sx={{width:'120px', ':hover': { bgcolor: "#21ba45",color: "#fff"}}}
                data-cy="apiKey-btn"
              >
                        Submit
                </StyledButton>

          </Grid>
        </Grid>
          
      </Box>
    </Fragment>
    
  );
};

export default ProfileContainer;
