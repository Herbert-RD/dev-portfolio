import styled from "styled-components";

export const ModalComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);

  > img {
    width: 100%;
  }
`

export const Component = styled.div`
  transition: transform .5s;
  &:hover{
    transform: scale(1.10);
  }
`