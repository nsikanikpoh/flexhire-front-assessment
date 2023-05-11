import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import { RelayEnvironmentProvider, loadQuery } from 'react-relay/hooks';
import RelayEnvironment from './relayGraphQL/RelayEnvironment';
import { currentUserProfileQuery } from './relayGraphQL/Queries/currentUserProfile'
import PageLoader from './components/Loaders/PageLoader';
import { ErrorBoundary } from './ErrorBoundary';
import { Typography } from '@mui/material';
import { flexhireApiKey } from './utils/utilities';

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(RelayEnvironment, currentUserProfileQuery, {
  /* query variables */
  flexhireApiKey
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <ErrorBoundary fallback={<Typography> Some error occurred...</Typography>}>
        <Suspense fallback={<PageLoader/>}>
          <App preloadedQuery={preloadedQuery} />
        </Suspense>
      </ErrorBoundary>
    </RelayEnvironmentProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
