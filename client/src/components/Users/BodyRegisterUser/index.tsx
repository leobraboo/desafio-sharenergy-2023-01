import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { IUser } from "../../../interface/IUser";
import { BtnFooter, BtnFooterItem, Container, ContentRegister, InputContainer, InputHeader } from "./styles";

export function BodyRegisterUser() {

  const { clearInputs, handleChange, handleSaveOrUpdate, setOpenRegister } = useContext(UserContext) as {
    clearInputs: () => void, handleOpen: () => void, handleChange: React.ChangeEventHandler, handleSaveOrUpdate: () => void, setOpenRegister: any
  }

  const { user } = useContext(UserContext) as { user: IUser }
  return (
    <>
      <Container>
        <ContentRegister>
          <InputContainer>
            <label>Nome</label>
            <InputHeader onChange={handleChange} defaultValue={user?.name || ""} name="name" type="text" />
          </InputContainer>
          <InputContainer>
            <label>Email</label>
            <InputHeader onChange={handleChange} defaultValue={user?.email || ""} name="email" type="text" />
          </InputContainer>
          <InputContainer>
            <label>Telefone</label>
            <InputHeader onChange={handleChange} defaultValue={user?.phone || ""} name="phone" type="text" />
          </InputContainer>
          <InputContainer>
            <label>Endereço</label>
            <InputHeader onChange={handleChange} defaultValue={user?.address || ""} name="address" type="text" />
          </InputContainer>
          <InputContainer>
            <label>CPF</label>
            <InputHeader onChange={handleChange} defaultValue={user?.cpf || ""} name="cpf" type="text" />
          </InputContainer>
        </ContentRegister>
        <BtnFooter>
          <BtnFooterItem onClick={() => setOpenRegister(false)} > Voltar </BtnFooterItem>
          <BtnFooterItem onClick={handleSaveOrUpdate}> Salvar </BtnFooterItem>
        </BtnFooter>
      </Container>
    </>
  )
}