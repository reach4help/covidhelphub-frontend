import React, { useContext, useEffect } from 'react';
import LoginContext from '../themes';
import LoginComponent from './loginComponent';
import LogoutComponent from './logoutComponent';
// eslint-disable-next-line func-names

function LoginProvider() {
  const { loginState } = useContext(LoginContext);

  useEffect(() => {
    localStorage.setItem('loginstate', loginState);
  }, [loginState]);

  return <div>{loginState ? <LogoutComponent /> : <LoginComponent />}</div>;
}

export default LoginProvider;
