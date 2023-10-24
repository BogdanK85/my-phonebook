import { NavLink } from 'react-router-dom';
import { AuthNavLinkStyle } from './AuthNavLink.styled';

export const AuthNavLink = () => {
  return (
    <AuthNavLinkStyle>
      <NavLink to="/register" className="link">
        Register
      </NavLink>
      <NavLink to="/login" className="login">
        Log In
      </NavLink>
    </AuthNavLinkStyle>
  );
};
