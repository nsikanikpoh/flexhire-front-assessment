import * as React from 'react';
import  { AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useStyles from '../../styles/styles';
import Answers from './Answers';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { isEmpty } from '../../utils/utilities';
import { CustomAccordion } from '../MuiComponents';


  export default function JobContractReq({node }){
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
              <Answers answers={contract.answers}/>
            </AccordionDetails>
        </CustomAccordion>
      }
        
    </React.Fragment>
    
  );
}
