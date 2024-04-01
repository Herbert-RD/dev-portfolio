import styled from 'styled-components';


export const Component = styled.div`
  padding: 8px 16px;
  border: 2px solid grey;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  position: relative;


  &:hover .options-wrapper{
    cursor: pointer;
    display: flex;
  }


  #open-drowndown {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
  
  }

  .options-wrapper {
    display: none;
    flex-direction: column;
    
    top: 100%;
    position: absolute;
    width: 100%;

 }

 .options-wrapper button{
  width: 100%;
 }

 .options-wrapper button:hover {
  background-color: grey;
 }

 
`