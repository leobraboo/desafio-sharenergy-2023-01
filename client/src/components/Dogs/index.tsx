import { GeneralHome } from "../Home/GeneralHome";
import { SideBar } from "../Navegation";

export function CmpHome() {
  return (
    <div style={{ display:"flex" }}>
      <SideBar />
      <GeneralHome />
    </div>
  )
}