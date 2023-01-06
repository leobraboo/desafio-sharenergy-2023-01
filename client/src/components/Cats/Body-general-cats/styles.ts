import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 64px;
display:flex;
justify-content: center;
align-items: center;
background-color: rgba(54,54,54, 0.2);
color: white;
border-radius:10px;
`
export const ContentCats = styled.div`
display: flex;
flex-direction: row;
margin: 10px;
gap: 10px;
`

export const LinksCats = styled.div`
width: 20%;
height: 60px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background: #212124;
border-radius: 0.2rem;
font-size: 25px;
font-weight: bold;
color: whitesmoke;
border-right: solid 2px red;
`