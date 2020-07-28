import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ededed;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #ededed;
  color: #818181;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #36a2c4;
      border-color: #36a2c4;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #36a2c4;
    `}

  input {
    color: #818181;
    flex: 1;
    border: 0;
    background: transparent;

    &::placeholder {
      color: #818181;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
