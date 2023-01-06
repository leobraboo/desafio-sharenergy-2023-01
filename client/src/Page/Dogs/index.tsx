import { CmpDogs } from "../../components/Dogs";
import { SideBar } from "../../components/Navegation";

export function PageDogs() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <CmpDogs />
    </div>
  )
}