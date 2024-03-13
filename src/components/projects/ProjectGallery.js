import styled from "styled-components";

export const ModalComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  > img {
    width: 40vw;
    border-radius: 12px;
    filter: drop-shadow(0 0 47px rgba(0, 0, 0, 0.25));
  }

  > button {
    background: white;

  }
`

export const Component = styled.div`
  transition: transform .5s;
  &:hover{
    transform: scale(1.10);
  }
`