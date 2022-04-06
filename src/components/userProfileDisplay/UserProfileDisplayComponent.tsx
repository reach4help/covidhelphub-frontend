import { useContext } from 'react';
import GoogleLoginContext from '../../store/GoogleLoginContext';
import Style from './userProfile.module.css';
import StyledProfileContainer from './StyledProfileContainer';
import StyledProfileInfo from './StyledProfileInfo';
import StyledProfileName from './StyledProfileName';

function UserProfileDisplayComponent() {
  const {
    loginState, name, email, url,
  } = useContext(GoogleLoginContext);
  return (
    <div>
      <StyledProfileContainer>
        <div>
          {loginState && url != null ? (
            <img src={url} alt={name} className={Style.profile__image} />
          ) : (
            ''
          )}
        </div>
        <StyledProfileInfo>
          {loginState && name != null ? (
            <StyledProfileName>{name}</StyledProfileName>
          ) : (
            ''
          )}
          {loginState && email != null ? <div>{email}</div> : ''}
        </StyledProfileInfo>
      </StyledProfileContainer>
    </div>
  );
}

export default UserProfileDisplayComponent;
