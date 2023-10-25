import { Section } from 'components/Section/Section';
import { NavLink } from 'react-router-dom';
import Phonebook from '../../images/phonebook1.png';
import {
  HomeB,
  HomeTitle,
  HomeTitleS,
  LogImg,
  MainHomeTitle,
  NaviWrap,
  NavText,
  NWrap,
} from './InitialHomePage.styled';
import registerPicture from '../../images/register-button.png';
import loginPicture from '../../images/login-button.png';

export const InitialHomePage = () => {
  return (
    <Section>
      <div>
        <MainHomeTitle>Welcome to our Phonebook web app!</MainHomeTitle>
        <img src={Phonebook} alt="Phonebook" width="85" />
      </div>
      <HomeTitle>
        It's a powerful tool for effortless contact management.{' '}
      </HomeTitle>
      <HomeTitleS>
        Whether for business or personal use, it simplifies your daily life with
        key features like adding, viewing, and searching contacts.
      </HomeTitleS>
      <HomeB>
        Try it today and experience the ease of online phonebook management!
      </HomeB>
      <NaviWrap>
        <NWrap>
          <NavText>Do you still not have an account?</NavText>
          <NavLink className="nav-link" to="/register">
            <LogImg src={registerPicture} alt="" />
          </NavLink>
        </NWrap>
        <NWrap>
          <NavText>Are you already a registered user?</NavText>
          <NavLink className="nav-link" to="/login">
            <LogImg src={loginPicture} alt="" />
          </NavLink>
        </NWrap>
      </NaviWrap>
    </Section>
  );
};
