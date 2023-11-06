import { styled } from 'styled-components';

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px 15px;
  padding: 30px 20px 10px;
  margin: 10px 40px;
  background-color: #72b99b;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  margin: 20px auto 10px;
  width: 100px;
  border: 1px solid black;
  border-radius: 2px;
  background-color: #e2d5c8;

  &:hover {
    cursor: pointer;
    background-color: #4697e8;
    color: white;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: 10px;
  margin: 5px 40px;
  text-align: center;
`;
