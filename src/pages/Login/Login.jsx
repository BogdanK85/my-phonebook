import LoginForm from 'components/LoginForm/LoginForm';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <LoginForm />
      <NavLink to="/registration">Sign up</NavLink>{' '}
    </>
  );
};

export default Login;
