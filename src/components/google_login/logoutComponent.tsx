import { useContext } from 'react';
import { GoogleLogout } from 'react-google-login';
import GoogleLoginContext from '../../store/GoogleLoginContext';

function LogoutComponent() {
  const { setLoginState } = useContext(GoogleLoginContext);
  const clientId: string = process.env
    .REACT_APP_GOOGLE_LOGIN_CLIENT_ID as string;
  const handleSuccess = () => {
    setLoginState(false);
  };

  return (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={handleSuccess}
    />
  );
}

export default LogoutComponent;
