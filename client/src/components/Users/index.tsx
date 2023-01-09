import { useState } from 'react'
import { BodyListUser } from "./BodyListUser";
import { BodyRegisterUser } from "./BodyRegisterUser";
import { BtnContent, BtnRegister, Container } from "./styles";

export function CmpRegister() {
  const [ registerU, setRegisterU ] = useState();
  return (
    <>
      <Container>
        <BtnContent>
          <BtnRegister> Imprimir lista</BtnRegister>
          <BtnRegister> Novo Cliente</BtnRegister>
        </BtnContent>
        <BodyRegisterUser />
      </Container>
    </>
  )
}