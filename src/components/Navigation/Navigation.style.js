import { styled } from 'styled-components';

export const NaviStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  .link {
    display: inline-block;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    color: beige;
    padding: 13px;
    &:hover,
    &:focus {
      color: rgb(222, 155, 28);
    }

    .link.active {
      color: rgb(222, 255, 28);
    }
  }
`;
