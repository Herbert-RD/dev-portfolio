import styled from 'styled-components';


export const Component = styled.div`
  padding: 8px 16px;
  border: 2px solid grey;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;


  &:hover{
    cursor: pointer;
    
  }
`