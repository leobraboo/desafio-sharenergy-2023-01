import { ContainerHead } from "./styles";

export function HeaderGeneralHome() {
  return (
    <ContainerHead>
      <input style={{ width: "100%", height: "2rem", borderRadius: "0.5rem", background:"#696969", color:"white" }} id="tex" name="text" type="text" />
      <button style={{ width: "10rem", height: "2rem", background: "#121214", borderRadius: "0.5rem", color: "whitesmoke" }}> Pesquisar </button>
    </ContainerHead>
  )
}