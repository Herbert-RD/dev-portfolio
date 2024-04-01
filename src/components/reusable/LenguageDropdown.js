import styled from 'styled-components';


export const Component = styled.div`
  padding: 8px 16px;
  background-color: #f7f8fc;
  border-radius: 8px;
  height: 44px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  position: relative;

  transition: background-color 0.2s, visibility 0.2s;
  



  &:hover{
    background-color: #d3d5de;
  }

  &:hover .options-wrapper{
    cursor: pointer;
    visibility: visible;
    opacity: 1;
  }


  #open-drowndown {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    
  }
  
  .selectedLang {
   background-color: #6366f1;
   color: white;

  }
  .options-wrapper {
    visibility: hidden;
    opacity: 0;
    display: flex;
    flex-direction: column;
    
    top: 100%;
    position: absolute;
    width: 100%;

    transition: visibility 0.2s, opacity 0.2s linear;
 }

 .options-wrapper button{
  width: 100%;
  padding: 8px 0;

}

 .options-wrapper button:hover {

}


`