import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const Header = styled.header`
  padding: 8px 0;
  border-bottom: 1px solid black;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  background-color: #ad886e;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #694718;
  }
`;
