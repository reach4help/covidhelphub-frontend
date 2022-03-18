import React, { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import GoogleLoginContext from '../../store/GoogleLoginContext';

function LoginComponent() {
  const { setLoginState } = useContext(GoogleLoginContext);

  const handleSuccess = () => {
    setLoginState(true);
  };

  // useEffect(() => {
  //   localStorage.setItem('loginstate', loginState);
  // }, [loginState]);

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
