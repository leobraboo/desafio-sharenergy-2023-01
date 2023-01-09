import styled from "styled-components";

export const Container = styled.div`
width: 80vw;
height: 80vh;
background: #121214;
border-radius: 1rem;
`
export const UserContent = styled.div`
width: 100%;
height: 64px;
display:flex;
flex-direction: row;
align-items: center;
background-color: rgba(54,54,54, 0.2);
color: white;
border-radius:10px;
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
font-weight: bold;
border-radius: 10px;
height: 40px;
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
height: 100%;
`