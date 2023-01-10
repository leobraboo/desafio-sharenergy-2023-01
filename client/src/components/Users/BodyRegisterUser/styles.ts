import styled from "styled-components";

export const Container = styled.div`
width: 60vw;
height: 80vh;
display: flex;
gap: 10px;
flex-direction: column;
justify-content: center;
align-items: center;
background: #121214;
border-radius: 1rem;
`
export const ContentRegister = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 45vw;
height: 65vh;
border: solid 1px #363636	;
border-radius: 1rem;
gap: 15px;
`
export const InputContainer = styled.div`
display: flex;
width: 80%;
color: whitesmoke;
font-weight: bold;
gap: 5px;
font-size: 12px;
flex-direction: column;
`
export const InputHeader = styled.input`
height: 2rem;
border-radius: 0.5rem;
background: #363636;
color: white;
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
export const BtnFooter = styled.div`
display: flex;
justify-content: space-between;
width: 45vw;
height: 35px;
margin-bottom: 10px;
`
export const BtnFooterItem = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 18%;
border-radius: 0.4rem;
background: rgb(67,56,202);
color: whitesmoke;
font-weight: bold;
font-size: 12px;
`