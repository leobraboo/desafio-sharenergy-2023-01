import { BodyGeneralCats } from "./Body-general-cats";
import { HeaderCats } from "./Header-cats";

export function CmpCats() {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100vw", height: "100vh", background: "#212124", justifyContent: "center", alignItems: "center" }}>
      <HeaderCats />
      <BodyGeneralCats />
    </div>
  )
}