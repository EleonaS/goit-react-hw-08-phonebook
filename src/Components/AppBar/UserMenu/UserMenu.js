import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../../../redux/auth/auth-selectors';
import { logOut } from '../../../redux/auth/auth-operations';
import {
  StyledBox,
  StyledImg,
  StyledWrapper,
  StyledText,
  StyledName,
  StyledButton,
} from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = 'images/default-profile.png';

  return (
    <StyledBox>
      <StyledImg src={avatar} alt="img" width="30" />
      <StyledWrapper>
        <StyledText>Welcome,</StyledText>
        <StyledName>{`${name}!`}</StyledName>
      </StyledWrapper>
      <StyledButton onClick={() => dispatch(logOut())}>Log Out</StyledButton>
    </StyledBox>
  );
}
