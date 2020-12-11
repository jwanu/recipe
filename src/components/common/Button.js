import React from 'react';
import styled from 'styled-components';
import { color } from '../../styles';

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 14px;
  background: linear-gradient(45deg, #ffffff, #f6f8fc);
  box-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
  font-size: 22px;
  color: ${color.gray[6]};
  transition: all .2s ease;
  &:hover {
    box-shadow: 3px 3px 6px #d8dade, -3px -3px 6px #ffffff;
    color: ${color.gray[7]};
  }
  &:focus {
      box-shadow: inset 3px 3px 5px #d8dade, inset -3px -3px 4px #ffffff;
      color: ${color.gray[9]};
    }
`;

const Button = ({ ...props }) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};

export default Button;
