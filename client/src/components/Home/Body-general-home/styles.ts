import styled from "styled-components";

export const Container = styled.div`
width: 80vw;
height: 70vh;
background: #121214;
border-radius: 1rem;
`
export const UserContent = styled.div`
width: 100%;
height: 64px;
display:flex;
gap: 30px;
flex-direction: row;
justify-content: space-around;
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
overflow-y: scroll;
width: auto;
max-height: 60vh;
scrollbar-color: blue orange; 
`
export const Pagination = styled.footer`
width: 30%;
height: 35px;
display:flex;
gap: 10px;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: rgba(54,54,54, 0.2);
color: white;
border-radius:10px;
`

export const PaginationItem = styled.div`
background: rgb(67,56,202);
padding: 3px 6px;
border-radius: 5px;
cursor: pointer;
//  {props => props.isSelect && {
//   background: "red",
// }}
`