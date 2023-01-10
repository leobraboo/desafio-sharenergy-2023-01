import { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import { BodyListUser } from "./BodyListUser";
import { BodyRegisterUser } from "./BodyRegisterUser";
import { BtnContent, BtnRegister, Container } from "./styles";

export function CmpRegister() {
  const { openRegister, setOpenRegister } = useContext(UserContext) as { openRegister: boolean, setOpenRegister: (value: boolean) => void }
  return (
    <>
      <Container>
        <BtnContent>
          <BtnRegister onClick={window.print}> Imprimir lista</BtnRegister>
          <BtnRegister onClick={() => setOpenRegister(true)} > Novo Cliente</BtnRegister>
        </BtnContent>
        {openRegister ? <BodyRegisterUser /> : <BodyListUser />}
      </Container>
    </>
  )
}