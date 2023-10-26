import { InitialHomePage } from 'components/InitialHomePage/InitialHomePage';
import { LoginUserPage } from 'components/LoginUserPage/LoginUserPage';
import { useAuth } from 'helpers/hookUseAuth';

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <LoginUserPage /> : <InitialHomePage />;
};

export default HomePage;
