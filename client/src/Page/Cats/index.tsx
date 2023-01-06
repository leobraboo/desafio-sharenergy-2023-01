import { CmpCats } from "../../components/Cats";
import { SideBar } from "../../components/Navegation";

export function PageCats() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <CmpCats />
    </div>
  )
}