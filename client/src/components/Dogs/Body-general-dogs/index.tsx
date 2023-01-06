import { ApiDogs } from "../../../services/useDogs";
import { BtnDogs, ContainerDogs, Content } from "./styles";

export function BodyGeneralDogs() {
  return (
    <ContainerDogs>
      <BtnDogs>
        <button>Clique para atualizar o Doguinho</button>
      </BtnDogs>
      <Content>
        <ApiDogs/>
      </Content>
    </ContainerDogs>
  )
}