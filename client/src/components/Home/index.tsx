import { GeneralHome } from "./GeneralHome";
import { SideBar } from "./SideBar";

export function CmpHome() {
  return (
    <div style={{ display:"flex" }}>
      <SideBar />
      <GeneralHome />
    </div>
  )
}