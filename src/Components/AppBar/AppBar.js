import { useSelector } from 'react-redux';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav/AuthNav';
import authSelectors from '../../redux/auth/auth-selectors';
import { StyledHeader, WrapperNav, Box } from './AppBar.styled';

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <StyledHeader>
      <WrapperNav>
        <Navigation />
        <Box>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
      </WrapperNav>
    </StyledHeader>
  );
}

export { AppBar };
