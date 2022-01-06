import { NavLink } from 'react-router-dom';
import { activeStyle } from '../Navigation/Navigation';
import { StyledAuthNav } from './AuthNav.styled';

function AuthNav() {
  return (
    <>
      <StyledAuthNav>
        <NavLink style={activeStyle} to="/register">
          Sign up
        </NavLink>
        <NavLink style={activeStyle} to="/login">
          Log In
        </NavLink>
      </StyledAuthNav>
    </>
  );
}

export default AuthNav;
