import { createContext } from "react";
import { UseUser } from "./hooks/useUser";

interface AuxProps {
  children: JSX.Element[] | JSX.Element
}

const UserContext = createContext({})

function UserProvider({children}: AuxProps) {
  const { deleteUser, clearInputs, findById, findAll, listUsers, setListUsers, handleOpen, handleChange, handleSaveOrUpdate, openRegister, setOpenRegister } = UseUser()

  return (
    <UserContext.Provider value={{ deleteUser, clearInputs, findById, findAll, listUsers, setListUsers, handleOpen, handleChange, handleSaveOrUpdate, openRegister, setOpenRegister }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }
