import React from 'react';
import styled from 'styled-components';
import { color } from '../../styles';

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 14px;
  background: ${props => props.active? `linear-gradient(145deg, ${color.orange[1]}, ${color.orange[5]})` : 'linear-gradient(45deg, #ffffff, #f6f8fc)'};
  box-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
  font-size: 22px;
  color: ${props => props.active? color.white : color.gray[6]};
  transition: all .2s ease;
  &:hover {
    box-shadow: 2px 2px 3px #b7bacb, -2px -2px 3px #ffffff;
    color: ${props => props.active? color.white : color.gray[7]};
  }
  &:active {
      box-shadow: inset 3px 3px 5px #d8dade, inset -3px -3px 4px #ffffff;
      color: ${props => props.active? color.white : color.gray[8]};
    }
  & + button {
    margin-left: 8px;
  }
`;

const Button = ({ ...props }) => {
  return <StyledButton onClick={props.onClick} active={props.active}>{props.children}</StyledButton>;
};

export default Button;
