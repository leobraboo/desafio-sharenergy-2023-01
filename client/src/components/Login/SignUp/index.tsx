import { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";
import fundo from '../../../assets/logoColor.png';
import { ILogin } from "../../../interface/Ilogin";

export function CmpSignUp() {
  const { setopenSignIn, handleChange , saveLogin } = useContext(LoginContext) as { setopenSignIn: any, handleChange: React.ChangeEventHandler, saveLogin: () => void}

  const { login } = useContext(LoginContext) as { login: ILogin }


  return (
    <div style={{ width: "25rem", height: "30rem", justifyContent: "center", background: "#212124", borderRadius: "10px" }}>
      <div className="flex items-center justify-center">
        <div>
          <div>
            <img style={{ width:"200px", height:"100px" }} className="mx-auto h-12 w-auto" src={fundo} alt="Your Company" />
            <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-white">Cadastre-se</h2>
          </div>
          <form style={{ width: "20rem" }} className="mt-8 space-y-8">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <input onChange={handleChange} defaultValue={login?.email || ""} style={{ marginBottom: "0.5rem" }} name="email" type="email" required className="relative w-full rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Digite seu Email" />
              </div>
              <div>
              <input onChange={handleChange} defaultValue={login?.username || ""} style={{ marginBottom: "0.5rem" }} name="username" type="text" required className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Usuario" />
            </div>
              <div>
                <input onChange={handleChange} defaultValue={login?.password || ""} style={{ marginBottom: "0.5rem" }} name="password" type="password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Digite a senha" />
              </div>
            </div>
        <div style={{ marginTop:"5rem" }}>
          <button onClick={saveLogin} type="button" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
              </svg>
            </span>
            Cadastrar
          </button>
        </div>
      </form>
    </div>
      </div >
    </div >
  )
}