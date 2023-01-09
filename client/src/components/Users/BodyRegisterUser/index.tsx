import { BtnFooter, BtnFooterItem, Container, ContentHeaders, ContentRegister, HeadersItem, InputContainer, InputHeader, UserContainer, UserItem } from "./styles";

export function BodyRegisterUser() {

  return (
    <>
      <Container>
        <ContentRegister>
          <InputContainer>
            <label>Nome</label>
            <InputHeader name="text" type="text" />
          </InputContainer>
          <InputContainer>
            <label>Email</label>
            <InputHeader name="email" type="text" />
          </InputContainer>
          <InputContainer>
            <label>Telefone</label>
            <InputHeader name="phone" type="text" />
          </InputContainer>
          <InputContainer>
            <label>Endereço</label>
            <InputHeader name="address" type="text" />
          </InputContainer>
          <InputContainer>
            <label>Cidade</label>
            <InputHeader name="address" type="text" />
          </InputContainer>
          <InputContainer>
            <label>CPF</label>
            <InputHeader name="cpf" type="text" />
          </InputContainer>
        </ContentRegister>
        <BtnFooter>
          <BtnFooterItem> Limpar Campos </BtnFooterItem>
          <BtnFooterItem> Salvar </BtnFooterItem>
        </BtnFooter>
      </Container>
    </>
  )
}