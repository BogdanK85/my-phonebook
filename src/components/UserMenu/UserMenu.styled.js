import { styled } from 'styled-components';

export const UserMenuStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const User = styled.p`
  color: #225a44;
  font-size: 16px;
  font-weight: 500;
`;
export const UserName = styled.span`
  color: #225a44;
  font-size: 20px;
  font-weight: 600;
`;
export const LogoutBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  width: 150px;
  height: 35px;
  text-align: center;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: rgb(190, 255, 233);
  color: rgb(41, 18, 18);
  margin-left: 15px;
  margin-bottom: 5px;
  &: hover {
    background: rgba(223, 125, 125, 0.8);
    color: white;
  }
`;
