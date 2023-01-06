import { BodyGeneralHome } from "./GeneralHome/Body-general-home";
import { HeaderGeneralHome } from "./GeneralHome/Header-general-home";
import { ContainerHome } from "./styles";

export function CmpHome() {
  return (
    <ContainerHome>
      <HeaderGeneralHome />
      <BodyGeneralHome />
    </ContainerHome>
  )
}