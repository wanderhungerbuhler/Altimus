import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 400px;
  width: 90%;
  margin: 70px auto;

  h1 {
    width: 70%;
    font-weight: bold;
    margin-bottom: 20px;
    color: #36a2c4;
  }

  button {
    width: 50%;
    margin: 0 auto;
    margin-top: 20px;
    background: #36a2c4;
    border: 0;
    height: 40px;
    border-radius: 50px;
    color: #fff;

    &:hover {
      color: #fff;
      background: ${shade(0.2, '#36a2c4')};
    }
  }
`;

export const BoxCar = styled.section`
  margin: 70px auto;

  article {
    background: #ededed;
    border-radius: 4px;
    max-width: 300px;
    width: 100%;

    img {
      width: 300px;
    }
  }
`;

export const BoxCarDescription = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 20px;

  h1 {
    font-size: 20px;
  }

  span {
    color: #36a2c4;
  }

  p {
    color: #36a2c4;
  }
`;
