import React, { Fragment } from 'react';
import { Button, Box, Typography } from '@mui/material';

const EmptyData = ({ errMessage, handleReFetch }) => {
  return (
    <Fragment>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} 
          marginTop={'15%'} bgcolor={'#f1f2f4'} height={'300px'} borderRadius={'10px'}>
          <Typography variant='h5' color='error' >
            {errMessage} 
         </Typography><br/>
         <Button onClick={handleReFetch} variant='outlined' color='secondary'> <u>try again</u></Button>
      </Box>
    </Fragment>
  );
};

export default EmptyData;
