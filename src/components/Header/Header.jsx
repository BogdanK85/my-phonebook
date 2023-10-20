import { Header, Link, Logo } from './Header.styled';
import headerLogo from '../../images/phonebook.svg.png';
export const HeaderWrap = () => {
  return (
    <Header>
      <Logo>
        <img src={headerLogo} alt="Header Logo" width="115" />
      </Logo>
      <nav>
        <Link to="/">Home page</Link>
        <Link to="/Login">Log in</Link>
        <Link to="/Registration">Regisrtation</Link>
      </nav>
    </Header>
  );
};
