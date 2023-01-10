import { createContext } from "react";
import { useLogin } from "./hooks/useLogin";

interface AuxProps {
  children: JSX.Element[] | JSX.Element
}

const LoginContext = createContext({})

function LoginProvider({children}: AuxProps) {
  const { handleOpen, handleChange, openSignIn, setopenSignIn } = useLogin()

  return (
    <LoginContext.Provider value={{ handleOpen, handleChange, openSignIn, setopenSignIn }}>
      {children}
    </LoginContext.Provider>
  )
}

export { LoginProvider, LoginContext }
