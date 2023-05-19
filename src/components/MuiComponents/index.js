import { Button, Accordion } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',maxHeight: 'none', fontWeight:'bold', p:2,
  },
});

export const CustomAccordion = styled(Accordion)(({ theme }) => {
  return {
    boxShadow: 'none', // this styles directly apply to accordion
    width: '100%',
    border: 'none',
    '.MuiAccordionDetails-root': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      width: '95%',
      flexWrap: 'wrap',
      marginTop: '50px',
      marginBottom:'20px'
    },
    '.MuiAccordionSummary-root': {
      width: '100%',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'flex-start',
      background:'#eafaf2',
      height:'50px',
      marginLeft:'0px',

    },
    '&:before': {
        backgroundColor: 'transparent !important',
      },
  };
});

export const StyledButton = styled(Button)(({ theme }) => {
  return {
    padding: '12px',  
      gap: '16px',
      height: '48px',background: '#2ecb80',
      borderRadius: '4px', cursor:'pointer', 
      textTransform:'none',color: '#FFFFFF', fontStyle: 'normal',
      fontWeight: 'bold',fontSize: '16px',textAlign: 'center',
      letterSpacing: '0.02em'
  };
});