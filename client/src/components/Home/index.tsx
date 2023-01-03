import { SideBar } from "../Navegation";
import { GeneralHome } from "./GeneralHome";

export function CmpHome() {
  return (
    <div style={{ display:"flex" }}>
      <SideBar />
      <GeneralHome />
    </div>
  )
}