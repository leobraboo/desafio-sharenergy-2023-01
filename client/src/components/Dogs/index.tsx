import { SideBar } from "../Navegation";
import { BodyGeneralDogs } from "./Body-general-dogs";

export function CmpDogs() {
  return (
    <div style={{ display:"flex" }}>
      <SideBar />
      <BodyGeneralDogs />
    </div>
  )
}