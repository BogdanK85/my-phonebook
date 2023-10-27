const { styled } = require('styled-components');

export const Wraper = styled.div`
  align-items: center;
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
  }
  .navBtn {
    display: inline-block;
    zoom: 1;
    padding: 7px 20px 7px;
    margin-bottom: 0;
    font-size: 25px;
    line-height: 18px;
    text-align: center;
    background-color: rgb(290, 255, 233);
    color: rgb(41, 18, 18);
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
    border-radius: 20px;
    margin-left: 35px;
    margin-top: -45px;
    &: hover {
      background: rgba(223, 125, 125, 0.8);
      color: white;
    }
  }
`;
