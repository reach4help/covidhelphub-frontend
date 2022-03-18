import React, { useContext } from 'react';
import GoogleLoginContext from '../../store/GoogleLoginContext';
import LoginComponent from './loginComponent';
import LogoutComponent from './logoutComponent';
// eslint-disable-next-line func-names

function GoogleLogin() {
  const { loginState } = useContext(GoogleLoginContext);

  // useEffect(() => {go
  //   localStorage.setItem('loginstate', loginState);
  // }, [loginState]);

  return <div>{loginState ? <LogoutComponent /> : <LoginComponent />}</div>;
}

export default GoogleLogin;
