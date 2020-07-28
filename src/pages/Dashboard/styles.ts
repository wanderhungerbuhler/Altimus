import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  width: 90%;
  margin: 70px auto;

  h1 {
    width: 70%;
    font-weight: bold;
    color: #36a2c4;
  }
  p {
    width: 70%;
    color: #818181;
  }
`;

export const Box = styled.div`
  max-width: 250px;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  margin-top: 20px;
  background: #ededed;
  padding: 0 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    span {
      font-size: 20px;
      color: #36a2c4;
    }
  }

  p {
    font-size: 10px;
    color: #818181;
    width: 90%;
    text-align: center;
  }

  svg {
    color: #36a2c4;
  }

  a {
    border: 1px solid #36a2c4;
    border-radius: 50px;
    text-align: center;
    color: #36a2c4;
    width: 70%;
    font-size: 16px;
    text-decoration: none;
    margin-top: 10px;
    transition: background-color 0.4s;

    &:hover {
      color: #fff;
      background: ${shade(0.2, '#36a2c4')};
    }
  }
`;
