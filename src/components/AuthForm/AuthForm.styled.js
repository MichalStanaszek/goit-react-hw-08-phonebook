import styled from 'styled-components';
import logo from './library.jpg';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  max-width: 640px;
  margin: 20vh auto;
  background: #fff;
  padding-left: 50px;
  overflow: hidden;
  border-radius: 10px;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;

export const StyledH2 = styled.h2`
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  width: 260px;
  margin: 25px auto 0;
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  text-align: center;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  width: 300px;
  background-size: cover;
  background-image: url(${logo});
`;

export const Button = styled.button`
  padding: 5px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  margin: 20px auto;
  transition: background-color 0.3s ease;
  height: 40px;
  width: fit-content;

  background-color: #ad886e;
  border: 1px solid #dddddd;
  color: #fff;

  &:hover {
    background-color: #72b99b;
  }
`;

export const StyledText = styled.p`
  text-align: center;
  margin: 0;
`;

export const StyledLink = styled(NavLink)`
  color: #72b99b;
  text-decoration: none;
  margin: 10px;
`;
