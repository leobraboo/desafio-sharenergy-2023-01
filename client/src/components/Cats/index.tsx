import { BodyCats } from "./Body-general-cats";
import { ContainerCats, ContainerHead } from "./styles";

export function CmpCats() {
  return (
    <ContainerCats >
      <ContainerHead>
        <h1>Escolha um STATUS CODE</h1>
      </ContainerHead>
      <BodyCats />
    </ContainerCats>
  )
}