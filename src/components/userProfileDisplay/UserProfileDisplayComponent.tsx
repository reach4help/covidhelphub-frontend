import { useContext } from 'react';
import GoogleLoginContext from '../../store/GoogleLoginContext';
import StyledProfileContainer from './StyledProfileContainer';
import StyledProfileInfo from './StyledProfileInfo';
import StyledProfileName from './StyledProfileName';
import StyledProfileImg from './StyledProfileImg';

function UserProfileDisplayComponent() {
  const {
    loginState, name, email, url,
  } = useContext(GoogleLoginContext);

  return (
    <StyledProfileContainer>
      <div>
        {loginState && url != null ? (
          <StyledProfileImg src={url} alt={name} />
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
  );
}

export default UserProfileDisplayComponent;
