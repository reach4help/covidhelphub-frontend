import { useContext } from 'react';
import GoogleLoginContext from '../../store/GoogleLoginContext';
import LoginComponent from './loginComponent';
import LogoutComponent from './logoutComponent';

function GoogleLogin() {
  const { loginState, name } = useContext(GoogleLoginContext);
  return (
    <div>
      <div>{loginState && name != null ? `Welcome ${name} !!` : ''}</div>
      {loginState ? <LogoutComponent /> : <LoginComponent />}
    </div>
  );
}

export default GoogleLogin;
