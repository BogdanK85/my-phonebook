import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLoggedUser } from 'redux/Auth/auth-selectors';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectLoggedUser);
  return isLoggedIn ? children : <Navigate to="/" />;
};
