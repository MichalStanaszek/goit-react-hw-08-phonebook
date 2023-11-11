import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  background-color: #ad886e;
  font-weight: 500;
  margin-right: 10px;

  &.active {
    color: white;
    outline: 3px solid #694718;
    background-color: #72b99b;
    color: #fff;
  }
`;

export const Header = styled.header`
  padding: 8px 0;
  border-bottom: 1px solid black;
`;
