import { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import GoogleLoginContext from '../../store/GoogleLoginContext';

function LoginComponent() {
  const { setLoginState } = useContext(GoogleLoginContext);
  const clientId: string = process.env
    .REACT_APP_GOOGLE_LOGIN_CLIENT_ID as string;

  const handleSuccess = () => {
    setLoginState(true);
  };

  return (
    <div>
      <p>Google login</p>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={handleSuccess}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
}

export default LoginComponent;
