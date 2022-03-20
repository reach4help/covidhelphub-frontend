import { useContext } from 'react';
import GoogleLoginContext from '../../store/GoogleLoginContext';
import LoginComponent from './loginComponent';
import LogoutComponent from './logoutComponent';

function GoogleLogin() {
  const { loginState } = useContext(GoogleLoginContext);
  return <div>{loginState ? <LogoutComponent /> : <LoginComponent />}</div>;
}

export default GoogleLogin;
