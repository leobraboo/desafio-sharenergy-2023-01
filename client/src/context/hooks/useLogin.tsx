import { useState, useCallback, useContext, useEffect } from 'react';

import { ILogin } from '../../interface/Ilogin';
import { toast } from 'react-toastify';

export function useLogin() {
  const [openSignIn, setopenSignIn ] = useState(false);
  const [login, setLogin] = useState<ILogin>();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }, [login]);

  const handleOpen = (value: boolean) => {
    setopenSignIn(value)
  }

  return { handleOpen, handleChange, openSignIn, setopenSignIn }
}