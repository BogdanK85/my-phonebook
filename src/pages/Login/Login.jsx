import { Section } from 'components/Section/Section';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/auth-operations';
import {
  ButtonLogin,
  LoginFormstyle,
  LoginFormTitle,
  LoginInput,
  LoginInputTitle,
  LoginLabel,
  Wraper,
} from './Login.styled';
import emailImg from '../../images/e-mail.png';
import passwordlImg from '../../images/login-password.png';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value.toString(),
        password: form.elements.password.value.toString(),
      })
    );
    form.reset();
  };

  return (
    <Section>
      <LoginFormTitle>Login account</LoginFormTitle>
      <LoginFormstyle onSubmit={handleSubmit} autoComplete="on">
        <LoginLabel htmlFor="email">
          <Wraper>
            <img src={emailImg} alt="email Img " width="35" />
            <LoginInputTitle>Email</LoginInputTitle>
          </Wraper>
          <LoginInput
            type="text"
            name="email"
            title="Name may contain letters, apostrophe, dash and spaces."
            required
            placeholder=""
            id="email"
          />
        </LoginLabel>
        <LoginLabel htmlFor="password">
          <Wraper>
            <img src={passwordlImg} alt="password Img " width="35" />
            <LoginInputTitle>Password</LoginInputTitle>
          </Wraper>
          <LoginInput
            type="text"
            name="password"
            title="Name may contain letters, apostrophe, dash and spaces."
            required
            placeholder=""
            id="password"
          />
        </LoginLabel>
        <ButtonLogin type="submit">Log in</ButtonLogin>
      </LoginFormstyle>
    </Section>
  );
};

export default Login;
