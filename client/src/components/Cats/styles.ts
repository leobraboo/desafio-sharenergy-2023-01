import styled from "styled-components";

export const ContainerCats = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
background: #212124;
justify-content: center;
align-items: center;
`

export const ContainerHead = styled.div`
display: flex;
width: 60vw;
height: 5vh;
color: white;
font-size: 30px;
background: #212124;
margin-bottom: 2rem;
justify-content: center;
align-items: center;
padding: 10px;
border: solid 1px #121214;
`
export const ContainerBody = styled.div`
width: 80vw;
height: 65vh;
background: #121214;
border-radius: 1rem;
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
export const FooterCats = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 60vw;
height: 10vh;
color: white;
font-size: 10px;
background: #212124;
margin-top: 1rem;
padding: 10px;
border: solid 1px #121214;
`
export const ContentFooter = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 33%;
color: white;
font-size: 10px;
`
export const Legends = styled.div`
width:10px;
height: 10px;
background: red;
`