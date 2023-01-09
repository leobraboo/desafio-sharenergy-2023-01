import { BodyGeneralHome } from "./Body-general-home";
import { BtnSearch, ContainerHead, ContainerHome, InputHeader } from "./styles";

export function CmpHome() {
  return (
    <ContainerHome>
      <ContainerHead>
        <InputHeader id="tex" name="text" type="text" />
        <BtnSearch> Pesquisar </BtnSearch>
      </ContainerHead>
      <BodyGeneralHome />
    </ContainerHome>
  )
}