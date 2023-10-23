import LoginForm from 'components/LoginForm/LoginForm';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <LoginForm />
      <NavLink to="/register">Sign up</NavLink>{' '}
    </>
  );
};

export default Login;
