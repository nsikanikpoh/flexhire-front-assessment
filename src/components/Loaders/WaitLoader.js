import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function WaitLoader({open}) {

  return (
    <div>
      <Backdrop
        sx={{ color: '#07AA1F', backgroundColor:'transparent', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}