import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';
import { logOut } from '../../../redux/auth/auth-operations';
import {
  StyledBox,
  StyledImg,
  StyledWrapper,
  StyledText,
  StyledName,
  StyledButton,
} from './UserMenu.styled';
import defaultAvatar from 'images/defaultAvatar.png';
import toast from 'react-hot-toast';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <StyledBox>
      <StyledImg src={avatar} alt="img" width="40" />
      <StyledWrapper>
        <StyledText>Welcome,</StyledText>
        <StyledName>{`${name}!`}</StyledName>
      </StyledWrapper>
      <StyledButton
        onClick={() =>
          dispatch(logOut(toast.success(`You are signed out ${name}`)))
        }
      >
        Log Out
      </StyledButton>
    </StyledBox>
  );
}
