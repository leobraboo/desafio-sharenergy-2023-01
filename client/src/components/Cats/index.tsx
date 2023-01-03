import { GeneralHome } from "../Home/GeneralHome";
import { SideBar } from "../Navegation";

export function CmpCats() {
  return (
    <div style={{ display:"flex" }}>
      <SideBar />
      <GeneralHome />
    </div>
  )
}