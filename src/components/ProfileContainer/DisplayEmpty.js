import React from 'react';
import { Box, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

function DisplayEmpty({title}) {
  return (
    <Box sx={{display:'flex',flexDirection:'column',margin:'auto', alignItems:'center', justifyContent:'center'}}>
        <InfoIcon fontSize='large'/>
        <Typography>{`No ${title} posted yet`}</Typography>
    </Box>
  )
}

export default DisplayEmpty