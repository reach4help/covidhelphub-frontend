import { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import GoogleLoginContext from '../../store/GoogleLoginContext';

function LoginComponent() {
  const {
    setLoginState, setEmail, setName, setUrl,
  } = useContext(GoogleLoginContext);

  const handleSuccess = (response: any) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    setLoginState(true);
    // console.log(response);
    // console.log('hello');
  };

  return (
    <div>
      {/* <p>Google login</p> */}
      <GoogleLogin
        clientId="626018378389-sfff95dsu0orjgvv7lb21dqtuu6ceai7.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={handleSuccess}
        cookiePolicy="single_host_origin"
      />
      {/* <div className="profile">
        <img src={url} alt={name} className="profile__image" />
        <div className="profile_name">
          name:
          {name}
        </div>
        <div className="profile__email">
          email:
          {email}
        </div>
      </div> */}
    </div>
  );
}

export default LoginComponent;
