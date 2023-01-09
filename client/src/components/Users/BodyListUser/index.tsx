import { Container, ContentHeaders, HeadersItem, UserContainer, UserContent, UserItem } from "./styles";
import { TbEdit, TbTrash } from "react-icons/tb";
export function BodyListUser() {

  return (
    <>
      <Container>
        <UserContainer>
          <ContentHeaders>
            <HeadersItem> Nome </HeadersItem>
            <HeadersItem> Email </HeadersItem>
            <HeadersItem> Telefone </HeadersItem>
            <HeadersItem> Endereço </HeadersItem>
            <HeadersItem> CPF </HeadersItem>
            <HeadersItem> Ações </HeadersItem>

          </ContentHeaders>
          <UserContent >
            <UserItem> teste</UserItem>
            <UserItem> so oto</UserItem>
            <UserItem> teste</UserItem>
            <UserItem> so oto</UserItem>
            <UserItem> teste</UserItem>
            <UserItem>
              <TbEdit />
              <TbTrash />
            </UserItem>
          </UserContent>
        </UserContainer>
      </Container>
    </>
  )
}