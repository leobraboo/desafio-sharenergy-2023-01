import { SideBar } from "../../components/Navegation";
import { CmpRegister } from "../../components/Users";

export function PageRegisterUser() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <CmpRegister />
    </div>
  )
}