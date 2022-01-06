import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { authSelectors } from '../../../redux/auth/auth-selectors';
import {} from 'Components/AppBar/Navigation/Navigation.styled';

export const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? '#3e84be' : '#fff',
    textDecoration: 'none',
  };
};

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" style={activeStyle}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" style={activeStyle}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
