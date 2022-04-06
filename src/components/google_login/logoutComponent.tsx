import { useContext } from 'react';
import { GoogleLogout } from 'react-google-login';
import GoogleLoginContext from '../../store/GoogleLoginContext';

function LogoutComponent() {
  const {
    setLoginState, setName, setEmail, setUrl,
  } = useContext(GoogleLoginContext);

  const handleSuccess = () => {
    setLoginState(false);
    setName(null);
    setEmail(null);
    setUrl(null);
  };

  return (
    <div>
      <GoogleLogout
        clientId="626018378389-sfff95dsu0orjgvv7lb21dqtuu6ceai7.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={handleSuccess}
      />
      {/* <div className="profile">
        <img src={url} alt={name} className="profile__image" />
        <div className="profile_name">name:MInu</div>
        <div className="profile__email">{email}</div>
      </div> */}
    </div>
  );
}

export default LogoutComponent;
