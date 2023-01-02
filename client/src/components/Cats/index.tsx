import { GeneralHome } from "../Home/GeneralHome";
import { SideBar } from "../Home/SideBar";

export function CmpCats() {
  return (
    <div style={{ display:"flex" }}>
      <SideBar />
      <GeneralHome />
    </div>
  )
}