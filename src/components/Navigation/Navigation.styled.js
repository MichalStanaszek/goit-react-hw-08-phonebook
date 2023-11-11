import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 8px 0;
`;

export const Link = styled(NavLink)`
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  width: fit-content;
  background-color: #ad886e;
  border: 1px solid #dddddd;
  color: #fff;
  margin-left: 10px;
  padding: 8px 16px;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    background-color: #72b99b;
  }

  &.active {
    color: white;
    outline: 2px solid #694718;
    background-color: #72b99b;
    color: #fff;
  }
`;
