import { BodyGeneralHome } from "./Body-general-home";
import { HeaderGeneralHome } from "./Header-general-home";

export function GeneralHome() {
  return (
    <div style={{ display: "flex", flexDirection:"column", width: "100vw", height: "100vh", background: "#212124", justifyContent: "center", alignItems: "center" }}>
        <HeaderGeneralHome/>
        <BodyGeneralHome/>
    </div>
  )
}