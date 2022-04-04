import { useContext } from 'react';
import { GoogleLogout } from 'react-google-login';
import GoogleLoginContext from '../../store/GoogleLoginContext';

function LogoutComponent() {
  const { setLoginState } = useContext(GoogleLoginContext);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [url, setUrl] = useState('');

  const handleSuccess = () => {
    setLoginState(false);
    // setName(response.profileObj.name);
    // setEmail(response.profileObj.email);
    // setUrl(response.profileObj.imageUrl);
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
