import { useContext } from 'react';
import GoogleLoginContext from '../store/GoogleLoginContext';
import GoogleLogin from './google_login/GoogleLogin';

function HomeComponent({ location }: { location: any }) {
  const {
    loginState, name, email, url,
  } = useContext(GoogleLoginContext);
  return (
    <h1>
      Content for
      {`"
      ${location.pathname}
      "`}
      TBD
      <GoogleLogin />
      {loginState ? 'Logged In: True' : 'Logged In: False'}
      {name}
      {email ? 'email present' : 'email absent'}
      {url}
    </h1>
  );
}

export default HomeComponent;
