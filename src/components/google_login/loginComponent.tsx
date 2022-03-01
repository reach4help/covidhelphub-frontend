import React, { useContext, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import LoginContext from '../themes';

function LoginComponent() {
  const { loginState, setLoginState } = useContext(LoginContext);

  const handleSuccess = () => {
    setLoginState(true);
  };

  useEffect(() => {
    localStorage.setItem('loginstate', loginState);
  }, [loginState]);

  const handleFailure = () => {
    console.log('login failed');
  };

  return (
    <div>
      <p>Google login</p>
      <GoogleLogin
        clientId="626018378389-sfff95dsu0orjgvv7lb21dqtuu6ceai7.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
}

export default LoginComponent;
