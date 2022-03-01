import React, { useState, useMemo } from 'react';
import LoginContext from './themes';
import LoginProvider from './google_login/loginProvider';

// import LoginComponent from './google_login/loginComponent';
// import LogoutComponent from './google_login/logoutComponent';
// eslint-disable-next-line func-names

function HomeComponent({ location }: { location: any }) {
  const [loginState, setLoginState] = useState(
    localStorage.getItem('loginstate') === 'true',
  );
  const value = useMemo(() => ({ loginState, setLoginState }), [loginState]);
  return (
    <h1>
      Content for
      {`"
      ${location.pathname}
      "`}
      TBD
      <LoginContext.Provider value={value}>
        <LoginProvider />
        {loginState ? 'Logged In: True' : 'Logged In: False'}
      </LoginContext.Provider>
    </h1>
  );
}

export default HomeComponent;
