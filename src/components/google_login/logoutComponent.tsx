import { useContext } from 'react';
import { GoogleLogout } from 'react-google-login';
import GoogleLoginContext from '../../store/GoogleLoginContext';

function LogoutComponent() {
  const { setLoginState } = useContext(GoogleLoginContext);
  const handleSuccess = () => {
    setLoginState(false);
  };

  return (
    <GoogleLogout
      clientId="626018378389-sfff95dsu0orjgvv7lb21dqtuu6ceai7.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={handleSuccess}
    />
  );
}

export default LogoutComponent;
