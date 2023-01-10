import { useContext } from 'react'
import { LoginContext } from "../../context/LoginContext";
import { CmpSignIn } from "./SignIn";
import { CmpSignUp } from './SignUp';

export function CmpLogin() {
  const { openSignIn, setopenSignIn } = useContext(LoginContext) as { openSignIn: boolean, setopenSignIn: (value: boolean) => void }
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#121214" }}>
      {openSignIn ? <CmpSignUp /> : <CmpSignIn />}
    </div>
  )
}