import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/auth-operations';
import { LogoutBtn, User, UserMenuStyle, UserName } from './UserMenu.styled';
import Nice_user from '../../images/Nice_user.png';
import { useAuth } from 'helpers/hookUseAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuStyle>
      <img src={Nice_user} alt="user Img " width="35" />
      <User>
        Welcome! You are logged as <UserName>"{user}"</UserName>
      </User>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutBtn>
    </UserMenuStyle>
  );
};
