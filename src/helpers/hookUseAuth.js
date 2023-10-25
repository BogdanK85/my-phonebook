import { useSelector } from 'react-redux';
import {
  selectLoading,
  selectLoggedUser,
  selectRefreshing,
  selectUser,
} from 'redux/Auth/auth-selectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoadingAuth = useSelector(selectLoading);
  const isLoggedIn = useSelector(selectLoggedUser);
  const isRefreshing = useSelector(selectRefreshing);

  return {
    user,
    isLoadingAuth,
    isLoggedIn,
    isRefreshing,
  };
};
