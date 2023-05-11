import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function PageLoader() {
  return (
    <div>
      <Backdrop
        sx={{ color: '#07AA1F', backgroundColor:'#F5F5F5', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}