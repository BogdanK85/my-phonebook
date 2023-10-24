import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/Auth/auth-operations';
import { selectUser } from 'redux/Auth/auth-selectors';
import { LogoutBtn, User, UserMenuStyle } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);

  return (
    <UserMenuStyle>
      <User>{userName}</User>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutBtn>
    </UserMenuStyle>
  );
};
