import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ILogin } from '../../interface/Ilogin';
import { toast } from 'react-toastify';
import loginServices from '../../services/loginServices';

export function useLogin() {
  const [openSignIn, setopenSignIn] = useState(false);
  const [login, setLogin] = useState<ILogin>();
  const [ulogger, setlogger] = useState<ILogin>({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }, [login]);

  const handleChangelogger = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setlogger({ ...ulogger, [e.target.name]: e.target.value })
  }, [ulogger]);

  const saveLogin = async () => {
    try {
      const result = await loginServices.save(login as ILogin)
    } catch (error) {
      console.log(error)

    }
  }

  const logger = async () => {
    try {

      const token = await loginServices.login(ulogger)

      sessionStorage.setItem("token", JSON.stringify(token))
      navigate("/home");

    } catch (error: any) {
      console.log(error)
    }
  }

  const handleOpen = (value: boolean) => {
    setopenSignIn(value)
  }

  const handleSave = async () => {
    login?.id === "" ? saveLogin() : "teste"
  }

  return { handleOpen, saveLogin, handleSave, logger, handleChange, handleChangelogger, openSignIn, setopenSignIn }
}