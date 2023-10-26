import { Header, Logo } from './Header.styled';
import headerLogo from '../../images/phonebook.svg.png';
import { useAuth } from 'helpers/hookUseAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavLink } from 'components/AuthNavLink/AuthNavLink';

export const HeaderWrap = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Logo>
        <img src={headerLogo} alt="Header Logo" width="115" />
      </Logo>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavLink />}
    </Header>
  );
};
