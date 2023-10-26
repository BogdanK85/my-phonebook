import { styled } from 'styled-components';

export const LoginUserPageWrap = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wra p;
  flex-direction: column;
  margin-bottom: 15px;
  margin-left: 50px;
  text-align: center;
`;
export const LoginUserTitle = styled.h2`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 5px;
  margin-top: 15px;
  color: beige;
`;
export const LoginUserText = styled.p`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 5px;
  margin-top: 15px;
  color: beige;
`;
export const ActionWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  margin-top: 25px;
`;
export const ActionBoxWraper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
export const ImgActionBtn = styled.img`
width: 150px;
  transition: transform  0.5s;
  &: hover, &: focus {
  transform: scale(1.2)
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;

  margin: 7px 15px;
  font-size: 22px;
  font-weight: 600;
`;
export const Input = styled.input`
  display: flex;
  width: 280px;
  height: 20px;
  font-size: 20px;
  font-weight: 500;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
  margin-top: 10px;
  /* margin-left: 5px; */
  padding: 7px;
  margin-left: 1px;
  background: rgba(0, 0, 0, 0.19);
  border: 1px solid rgba(46, 45, 45, 0.3);
  border-radius: 5px;
  outline: none;
`;
export const ButtonSignIn = styled.button`
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
