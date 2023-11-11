import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoutButton = styled.button`
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  transition: background-color 0.3s ease;
  width: fit-content;
  background-color: #ad886e;
  border: 1px solid #dddddd;
  color: #fff;
  padding: 10px 20px;
  margin-left: 10px;

  &:hover {
    background-color: #72b99b;
  }
`;

export const StyledP = styled.p`
  margin: 0;
`;

export const UserTitle = styled.span`
  font-weight: 600;
`;
