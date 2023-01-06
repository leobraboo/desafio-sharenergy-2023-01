import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
background: #121214;
border-right: solid 3px rgb(67,56,202);
`
export const ContentBtn = styled.button`
display: flex;
flex-direction: column;
padding: 10px;
gap: 10px;
margin-top: 5rem;
`

export const ButtonSide = styled.button`
align-items: center;
display: flex;
height: 40px;
justify-content:center;
color:white;
border-radius:5px;
  &:hover{
    background: rgb(67,56,202);
  }
`
export const TextSide = styled.div`
align-items: center;
`