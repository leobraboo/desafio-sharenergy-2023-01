import { useState, useCallback, useContext, useEffect } from 'react';

import { INITIAL_STATE } from '../../InitialState/User';
import UserService from '../../services/UserService';
import { IUser } from '../../interface/IUser';
import { toast } from 'react-toastify';

export function UseUser() {
  const [user, setUsers] = useState<IUser>(INITIAL_STATE);
  const [openRegister, setOpenRegister] = useState(false)
  const [listUsers, setListUsers] = useState<IUser[]>([INITIAL_STATE]);

  useEffect(() => {
    try {
      const findAll = async () => {
        const result = await UserService.findAll()
        setListUsers(result)
      }

      findAll()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUsers({ ...user, [e.target.name]: e.target.value })
  }, [user]);

  const saveUser = async () => {
    try {
      const result = await UserService.save(user as IUser)
      setUsers({ ...user, _id: result._id })
      toast("Salvo com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
      clearInputs()
    } catch (error: any) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const updateUser = async () => {
    try {
      await UserService.update(user as IUser)
      toast("Atualizado com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const deleteUser = async (id: string | undefined) => {
    try {
      await UserService.delete(id)
      toast("Registro deletado com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const findById = async (id: string | undefined) => {
    try {
      const result = await UserService.findById(id)
      setUsers(result)
    } catch (error: any) {
      return toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const findAll = async () => {
    try {
      const result = await UserService.findAll()
      setListUsers(result.data)
    } catch (error: any) {
      return (error)
    }
  }

  const handleSaveOrUpdate = async () => {
    user?._id === "" ? saveUser() : updateUser()
  }

  const clearInputs = () => {
    setUsers(INITIAL_STATE)
  }

  const handleOpen = (value: boolean) => {
    setOpenRegister(value)
  }

  return { user, deleteUser, findById, findAll, listUsers, setListUsers, clearInputs, handleOpen, handleChange, handleSaveOrUpdate, openRegister, setOpenRegister }
}