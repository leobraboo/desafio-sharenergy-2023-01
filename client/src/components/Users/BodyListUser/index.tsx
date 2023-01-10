import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

import { ActionItem, ActionItemDelete, Container, ContentHeaders, HeadersItem, Testeee, UserContainer, UserContent, UserItem } from "./styles";
import { TbTrash } from "react-icons/tb";
import { IUser } from "../../../interface/IUser";

export function BodyListUser() {
  const { findAll, listUsers, findById, deleteUser } = useContext(UserContext) as { findAll: () => void, listUsers: IUser[], findById: any, deleteUser: any }

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
            <ActionItem> Ações </ActionItem>
          </ContentHeaders>
          <Testeee>
            {listUsers.map(e =>
              <UserContent key={e._id} onClick={() => findById(e._id)}>
                <UserItem>{e.name}</UserItem>
                <UserItem>{e.email}</UserItem>
                <UserItem>{e.phone}</UserItem>
                <UserItem>{e.address}</UserItem>
                <UserItem>{e.cpf}</UserItem>
                <ActionItemDelete>
                  <TbTrash size={25} onClick={() => deleteUser(e._id)} />
                </ActionItemDelete>
              </UserContent>
            )}
          </Testeee>
        </UserContainer>
      </Container>
    </>
  )
}