import { useAuth } from 'helpers/hookUseAuth';
import { NavLink } from 'react-router-dom';
import home from '../../images/home.png';
import { NaviStyle } from './Navigation.style';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NaviStyle>
      <NavLink>
        <img src={home} alt="home Img " width="35" height="35" />
        Home
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink className="link" to="/contacts">
            Contacts
          </NavLink>
          <NavLink className="link" to="/newaccountpage">
            New Account Page
          </NavLink>
        </>
      )}
    </NaviStyle>
  );
};
