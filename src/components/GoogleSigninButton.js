import React from 'react';
import firebase from './firebase'; // Path to your firebase.js file
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const GoogleSignInButton = () => {
    const uiConfig = {
      signInFlow: 'popup',
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    };
  
    return (
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
    );
  };
  
  export default GoogleSignInButton;
  