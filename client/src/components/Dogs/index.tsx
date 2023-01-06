import { ApiDogs } from "../../services/useDogs";
import { SideBar } from "../Navegation";
import { ContainerDogs, BtnDogs, Content } from "./styles";

export function CmpDogs() {
  return (
      <ContainerDogs>
        <BtnDogs>
          <button>Clique para atualizar o Doguinho</button>
        </BtnDogs>
        <Content>
          <ApiDogs />
        </Content>
      </ContainerDogs>
  )
}