import { useContext } from 'react';
import GoogleLoginContext from '../../store/GoogleLoginContext';
import LoginComponent from './loginComponent';
import LogoutComponent from './logoutComponent';

function GoogleLogin() {
  const {
    loginState, name, email, url,
  } = useContext(GoogleLoginContext);
  return (
    <div>
      {loginState ? <LogoutComponent /> : <LoginComponent />}
      <h1>
        Welcome:
        {name}
      </h1>
      <h1>
        Email:
        {email}
      </h1>
      <img src={url} alt={name} />
    </div>
  );
}

export default GoogleLogin;
