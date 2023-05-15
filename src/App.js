import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Container, Button } from '@mui/material';
import ProfileContainer from './components/ProfileContainer';
import { ErrorBoundary } from './ErrorBoundary';
import { useQueryLoader } from 'react-relay';
import { currentUserProfileQuery } from './relayGraphQL/Queries/currentUserProfile'
import { flexhireApiKey } from './utils/utilities';

const theme = createTheme({
  typography: {
    fontFamily: ['Barlow Semi Condensed'].join(',')
  }
});

const App = ({preloadedQuery}) => {
  const [isMobile, setIsMobile] = useState(false)
  const [flexKey, setFlexKey] = useState(flexhireApiKey);
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
    loadQuery({flexhireApiKey: flexKey});
  }

  const loadNewData = (inputKey) => {
    loadQuery({flexhireApiKey: inputKey});
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
            <ErrorBoundary fallback={(clearError) => (
            <Typography> Some error occurred, why not {' '}
              <Button onClick={(e)=>tryAgain(e, clearError)}> <u>try again</u></Button>
            </Typography>
            )}>
            <Container maxWidth={isMobile ? 'sm' : undefined}>
                <ProfileContainer queryReference={queryReference} loadNewData={loadNewData} isMobile={isMobile}/>              
            </Container>
          <Footer /> 
          </ErrorBoundary> 
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;