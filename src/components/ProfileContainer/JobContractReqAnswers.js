import * as React from 'react';
import  { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useStyles from '../../styles/styles';
import { styled } from '@mui/material/styles';
import Answers from './Answers';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { isEmpty } from '../../utils/utilities';

const CustomAccordion = styled(Accordion)(({ theme }) => {
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
      width: '100%',
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


  export default function JobContractReqAnswers({node }){
    const classes = useStyles();
    const [contract, setContract] = React.useState({contractRequests: [], answers: []})
    const data =  useFragment(graphql`
         fragment JobContractReqAnswers_node on Job {
          contract{
            id
            country
            answers{
              id
              available
            createdAt          
            optimizedUrl
            posterUrl
            public
            url
            question{
              id
              title
              description
             }
            }
            contractRequests{
              id                      
            }
          }
    }
`, node);

React.useEffect(()=>{
  if(!isEmpty(data.contract)){   
    setContract(data.contract);
  }
},[data])
// console.log('contracts', data);

  return (
    <React.Fragment>
      {
        contract.contractRequests.length === 0 ? 
        <Typography color={'#76889b'} ><em>No job requests</em></Typography>
        : 
        
        <CustomAccordion style={{background:'#FFFFFF'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon fontSize='large' color='#00CB80'/>}
                aria-controls={`panel1a-content-data`}
                id={`panel1a-header-data`}
                >
            <Typography variant='h5' className={classes.jobReqtitle}>Answers to Job Contract Request</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className={classes.answerContainer}>
                   <Answers answers={contract.answers}/>
                </Box>
            </AccordionDetails>
        </CustomAccordion>
      }
        
    </React.Fragment>
    
  );
}
