import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Container, Button, Box } from '@mui/material';
import ProfileContainer from './components/ProfileContainer';
import { ErrorBoundary } from './ErrorBoundary';
import { useQueryLoader, fetchQuery } from 'react-relay';
import { currentUserProfileQuery } from './relayGraphQL/Queries/currentUserProfile'
import RelayEnvironment from './relayGraphQL/RelayEnvironment';

const theme = createTheme({
  typography: {
    fontFamily: ['Barlow Semi Condensed'].join(',')
  }
});

const App = ({preloadedQuery}) => {
  const [isMobile, setIsMobile] = useState(false)
  const [queryReference, loadQuery] = useQueryLoader(currentUserProfileQuery, preloadedQuery);
  
  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true);
    } else {
        setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  },[]);

  const tryAgain = (e, clearError) => {
    e.preventDefault();
    clearError();
    loadQuery({}, { fetchPolicy: 'network-only' });
  }
  
  const reFetch = () => {
    localStorage.removeItem('flexhireApiKey');
    loadNewData();
  }

  const loadNewData = () => {
    fetchQuery(RelayEnvironment, currentUserProfileQuery, {}).subscribe({
      complete(){
        loadQuery({}, { fetchPolicy: 'network-only'});
      }
    });
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
            <ErrorBoundary fallback={(clearError) => (
                  <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} 
                    marginTop={'15%'} bgcolor={'#f1f2f4'} height={'300px'} borderRadius={'10px'}>
                    <Typography variant='h5' color='error' >
                    Some error occurred, why not
                    </Typography><br/>
                    <Button onClick={(e)=>tryAgain(e, clearError)} variant='outlined' color='secondary'> <u>try again</u></Button>
                  </Box>
            )}>
            <Container maxWidth={isMobile ? 'sm' : undefined}>
                <ProfileContainer queryReference={queryReference} 
                    loadNewData={loadNewData} 
                    reFetch={reFetch}
                />              
            </Container>
          <Footer /> 
          </ErrorBoundary> 
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;