import LoginForm from 'components/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from 'redux/Auth/auth-operations';

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
    <>
      <LoginForm />
      <NavLink to="/register">Sign up</NavLink>{' '}
    </>
  );
};

export default Login;
