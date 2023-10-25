import { styled } from 'styled-components';

export const LoginFormTitle = styled.h2`
  color: beige;
  font-size: 38px;
  font-weight: 600;
  margin-bottom: 40px;
  margin-top: 5px;
`;
export const LoginFormstyle = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
  color: beige;
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 50px;
  margin-top: 25px;
  width: 500px;
  height: 300px;
  border-radius: 20px;
  background: linear-gradient(
    90deg,
    rgba(134, 40, 80, 1) 0%,
    rgba(200, 11, 32, 0.9724264705882353) 74%
  );
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.6);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.6);
`;
export const Wraper = styled.div`
  display: flex;
  position: absolute;
  transform: translateY(-40px);
  gap: 7px;
  justify-content: center;
  align-items: center;
`;
export const LoginInputTitle = styled.p`
  font-size: 22px;
`;
export const LoginInput = styled.input`
  display: flex;
  width: 280px;
  height: 20px;
  font-size: 20px;
  font-weight: 500;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
  margin-top: 30px;
  /* margin-left: 5px; */
  padding: 7px;
  margin-left: 1px;
  background: rgba(0, 0, 0, 0.19);
  border: 1px solid rgba(46, 45, 45, 0.3);
  border-radius: 5px;
  outline: none;
`;
export const LoginLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;

  margin: 7px 15px;
  font-size: 22px;
  font-weight: 600;
`;
export const ButtonLogin = styled.button`
  font-size: 18px;
  font-weight: 700;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  width: 150px;
  height: 35px;
  text-align: center;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: rgb(290, 255, 233);
  color: rgb(41, 18, 18);
  margin-left: 15px;
  margin-bottom: 5px;
  &: hover {
    background: rgba(223, 125, 125, 0.8);
    color: white;
  }
`;
