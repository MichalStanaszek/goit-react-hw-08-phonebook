import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const StyleUl = styled.ul`
  border-top: 2px dotted black;
  list-style-type: none;
  padding: 10px 0;
  margin-bottom: 0;
  max-height: 350px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    overflow: hidden;
  }
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 2px;
  color: #2f5f4b;
  font-weight: 500;
`;

export const StyledButon = styled.button`
  border: 2px solid red;
  border-radius: 10px;
  margin-left: 40px;

  &:hover {
    cursor: pointer;
    background-color: red;
    color: white;
  }
`;
