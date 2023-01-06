import { CmpHome } from "../../components/Home";
import { SideBar } from "../../components/Navegation";

export function PageHome() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <CmpHome />
    </div>
  )
}