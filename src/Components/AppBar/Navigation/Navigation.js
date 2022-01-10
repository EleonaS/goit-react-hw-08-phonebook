import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';
import { StyledNav } from './Navigation.styled';

export const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? 'grey' : '#fff',
    textDecoration: 'none',
  };
};

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <StyledNav>
      <NavLink to="/" style={activeStyle}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" style={activeStyle}>
          Contacts
        </NavLink>
      )}
    </StyledNav>
  );
}
