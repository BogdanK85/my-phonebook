import { styled } from 'styled-components';

export const NaviStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    color: beige;
    padding: 7px;
    &:hover,
    &:focus {
      color: rgb(222, 155, 28);
    }

    .link.active {
      color: rgb(222, 255, 28);
    }
  }
`;
