import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const Alert = React.forwardRef(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



export default function SnackbarAlert({open, error}) {
  const [isOpen, setisOpen ] = useState(open);

  useEffect(()=>{
    if(isOpen){
      setTimeout(() => {
        setisOpen(false);
      }, 5000);
    }
  },[isOpen]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar 
        open={isOpen} 
        autoHideDuration={5000} 
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        anchorOrigin={{ vertical: 'bottom',horizontal: 'right', }}
      >
        <Alert onClose={handleClose} severity={'error'} sx={{ width: '100%' }}>
          {error?.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

