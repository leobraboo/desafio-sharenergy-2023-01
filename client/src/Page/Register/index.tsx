import { SideBar } from "../../components/Navegation";
import { CmpRegister } from "../../components/Users";
import { UserProvider } from "../../context/UserContext";

export function PageRegisterUser() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <UserProvider>
        <CmpRegister />
      </UserProvider>
    </div>
  )
}