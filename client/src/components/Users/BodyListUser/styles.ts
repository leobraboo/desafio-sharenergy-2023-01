import styled from "styled-components";

export const Container = styled.div`
width: 80vw;
height: 80vh;
display:flex;
justify-content: center;
background: #121214;
border-radius: 1rem;
`
export const UserContent = styled.div`
width: 100%;
height: 64px;
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: rgba(54,54,54, 0.2);
color: white;
border-radius:10px;
:hover{
  background: black;
}
`
export const Testeee = styled.div`
width: 75vw;
height: auto;
display: flex;
gap: 5px;
flex-direction: column;
background: #121214;
border-radius: 1rem;
`

export const UserContainer = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
gap: 10px;

`
export const ContentHeaders = styled.div`
display: flex;
flex-direction: row;
background: black;
justify-content: center;
font-weight: bold;
border-radius: 10px;
height: 40px;
width: 75vw;
`
export const HeadersItem = styled.div`
display: flex;
justify-content: center;
align-items : center;
color: whitesmoke;
width: 18%;
`
export const UserItem = styled.div`
display: flex;
justify-content: center;
align-items : center;
color: whitesmoke;
width: 18%;
gap: 10px;
height: 100%;

`
export const ActionItem = styled.div`
display: flex;
justify-content: center;
align-items : center;
color: whitesmoke;
width: 5%;
height: 100%;
`
export const ActionItemDelete = styled.button`
display: flex;
justify-content: center;
align-items : center;
color: whitesmoke;
width: 5%;
height: 100%;
:hover{
  color: red;
}
`