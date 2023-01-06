import { BtnSearch, ContainerHead } from "../../styles";

export function HeaderGeneralHome() {
  return (
    <ContainerHead>
      <input style={{ width: "100%", height: "2rem", borderRadius: "0.5rem", background:"#696969", color:"white" }} id="tex" name="text" type="text" />
      <BtnSearch> Pesquisar </BtnSearch>
    </ContainerHead>
  )
}