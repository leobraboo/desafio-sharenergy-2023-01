import { CmpLogin } from "../../components/Login";
import { LoginProvider } from "../../context/LoginContext";

export function PageLogin() {
  return (
    <>
      <LoginProvider>
        <CmpLogin />
      </LoginProvider>
    </>
  )
}