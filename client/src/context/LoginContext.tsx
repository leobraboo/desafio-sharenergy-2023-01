import { createContext } from "react";
import { useLogin } from "./hooks/useLogin";

interface AuxProps {
  children: JSX.Element[] | JSX.Element
}

const LoginContext = createContext({})

function LoginProvider({children}: AuxProps) {
  const { handleOpen, handleChange, saveLogin, handleSave, handleChangelogger, logger, openSignIn, setopenSignIn } = useLogin()

  return (
    <LoginContext.Provider value={{ handleOpen, handleChange, handleChangelogger, saveLogin, handleSave, logger, openSignIn, setopenSignIn }}>
      {children}
    </LoginContext.Provider>
  )
}

export { LoginProvider, LoginContext }
