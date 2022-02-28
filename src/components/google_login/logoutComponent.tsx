import { useContext, useEffect } from 'react';
import { GoogleLogout } from 'react-google-login';
import LoginContext from '../themes';

function LogoutComponent() {
  const { loginState, setLoginState } = useContext(LoginContext);
  const responseLogout = () => {
    setLoginState(false);
  };

  useEffect(() => {
    localStorage.setItem('loginstate', loginState);
  }, [loginState]);

  return (
    <GoogleLogout
      clientId="626018378389-sfff95dsu0orjgvv7lb21dqtuu6ceai7.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={responseLogout}
    />
  );
}

export default LogoutComponent;
