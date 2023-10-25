import { styled } from 'styled-components';

export const MainHomeTitle = styled.h1`
  color: beige;
  font-size: 38px;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 1px;
`;
export const HomeTitle = styled.h2`
  color: beige;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 5px;
`;
export const HomeTitleS = styled.h3`
  color: beige;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 5px;
  text-aline: center;
  margin-left: 30px;
  margin-right: 20px;
`;
export const HomeB = styled.b`
  color: beige;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 5px;
`;
export const NaviWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 200px;
`;

export const NWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const NavText = styled.p`
  color: beige;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 15px;
  margin-left: 35px;
`;

export const LogImg = styled.img`
  width: 100px;
  transition: transform 0.3s;

  &:hover,
  &:focus {
    transform: scale(1.15);
  }
`;
