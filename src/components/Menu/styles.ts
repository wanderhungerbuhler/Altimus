import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #ededed;

  display: grid;
  grid-template-columns: 1fr 80px;
  justify-content: space-around;
  align-items: center;
  flex: 1;

  img {
    width: 190px;
    margin: 0 auto;
    display: block;
  }
`;

export const Logout = styled.button`
  border: 0;
  background: transparent;

  justify-content: center;
  align-items: center;

  svg {
    color: #36a2c4;
    margin-right: 7px;
  }

  p {
    color: #36a2c4;
  }
`;
