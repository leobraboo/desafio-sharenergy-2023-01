import styled from "styled-components";

export const ContainerHead = styled.div`
display: flex;
width: 60vw;
height: 10vh;
background: #212124;
margin-bottom: 2rem;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;
border: solid 1px #4F4F4F;
`
export const InputHeader = styled.input`
width: 100%;
height: 2rem;
border-radius: 0.5rem;
background: #363636;
color: white;

:focus {
  border: solid 1px red;
}
`

export const BtnSearch = styled.button`
display: flex;
width: 10rem;
height: 2rem;
justify-content: center;
align-items: center;
background: #121214;
border-radius: 0.5rem;
color: whitesmoke;
&:hover{
  background: rgb(67,56,202);
}
`

export const ContainerHome = styled.div`
display: flex;
flex-direction:column;
width: 100vw;
height: 100vh;
background: #212124;
justify-content: center;
align-items: center;
`