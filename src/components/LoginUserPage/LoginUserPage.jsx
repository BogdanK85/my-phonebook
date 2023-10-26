import { useAuth } from 'helpers/hookUseAuth';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/Auth/auth-operations';
import UserImg from '../../images/user.png';
import {
  ActionBoxWraper,
  ActionWraper,
  ImgActionBtn,
  LoginUserPageWrap,
  LoginUserText,
  LoginUserTitle,
} from './LoginUserPage.styled';
import addUser from '../../images/add-user.png';
import userList from '../../images/user-list.png';
import logout from '../../images/logout.png';

export const LoginUserPage = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <LoginUserPageWrap>
      <img src={UserImg} alt="user Img " width="150" />
      <LoginUserTitle>Congratulations!</LoginUserTitle>
      <LoginUserText>Dear {user}</LoginUserText>
      <LoginUserText>You can take some of this options: </LoginUserText>
      <ActionWraper>
        <ActionBoxWraper>
          <LoginUserText>Follow to Contacts</LoginUserText>
          <NavLink className="naviLink" to="/contacts">
            <ImgActionBtn src={userList} alt="" width="150" />
          </NavLink>
        </ActionBoxWraper>
        <ActionBoxWraper>
          <LoginUserText>Add new Contact</LoginUserText>
          <NavLink className="naviLink" to="/newaccountpage">
            <ImgActionBtn src={addUser} alt="" width="150" />
          </NavLink>
        </ActionBoxWraper>
        <ActionBoxWraper>
          <LoginUserText>Log out</LoginUserText>
          <button
            className="action-button"
            type="button"
            onClick={() => dispatch(logOut())}
          >
            <ImgActionBtn src={logout} alt="" width="150" />
          </button>
        </ActionBoxWraper>
      </ActionWraper>
    </LoginUserPageWrap>
  );
};
