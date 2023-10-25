import { InitialHomePage } from 'components/InitialHomePage/InitialHomePage';
import { LoginUserPage } from 'components/LoginUserPage/LoginUserPage';
import { useAuth } from 'helpers/hookUseAuth';

const HomePage = () => {
  const { isLoaggedIn } = useAuth();

  return isLoaggedIn ? <LoginUserPage /> : <InitialHomePage />;
};

export default HomePage;
