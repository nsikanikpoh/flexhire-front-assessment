import React, { useState, Fragment } from 'react'
import { Box, Button } from '@mui/material';
import UserAnswers from './UserAnswers';
import JobOpportunities from './JobOpportunities';
import useStyles from '../../styles/styles';

export default function Tabs({ currentUser }){
    const [tab, setTab] = useState('answers');
    const classes = useStyles();

    const setActiveTab = (e, activeTab)=>{
        e.stopPropagation();
        setTab(activeTab);
    }

  return (
    <Fragment>
        <Box width={'100%'} bgcolor={'#f8fafc'} display={'flex'} alignItems={'center'} justifyContent={'center'} 
                    alignContent={'center'}>
            <Box className={classes.tabsContainer} >
                <Button 
                    sx={{borderBottomColor: `${tab === 'answers' ? '#2ecb80' : 'transparent'}`,
                    borderBottomWidth: `${tab === 'answers' ? '5px' : '0px'}`,
                    borderBottomStyle: 'solid', color: `${tab === 'answers' ? '#2ecb80' : '#666666'}`,
                    width: '100%', fontWeight:'bold', ':hover': {bgcolor: "transparent" }}}
                    onClick={(e)=>setActiveTab(e, 'answers')}
                    data-cy="profile-answers-tab-btn"
                    >Video Answers
                </Button>
                <Button 
                    sx={{borderBottomColor: `${tab === 'jobs' ? '#2ecb80' : 'transparent'}`,
                    borderBottomWidth: `${tab === 'jobs' ? '5px' : '0px'}`,
                    borderBottomStyle: 'solid', color: `${tab === 'jobs' ? '#2ecb80' : '#666666'}`,
                    width: '100%', fontWeight:'bold', ':hover': {bgcolor: "transparent" }}}
                    onClick={(e)=>setActiveTab(e, 'jobs')}
                    data-cy="profile-jobs-tab-btn"
                    >Jobs Applied
                </Button>
            </Box>  
        </Box>


        <JobOpportunities currentUser={currentUser} isClicked={tab === 'jobs'}/>

        <UserAnswers currentUser={currentUser} isClicked={tab === 'answers'}/>

        
    </Fragment>
        
  )
}
