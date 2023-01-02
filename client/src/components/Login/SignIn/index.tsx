import { Link } from 'react-router-dom';

export function CmpSignIn() {
  return (
    <div style={{ width: "25rem", height: "30rem", justifyContent: "center", background: "#212124", borderRadius: "10px" }}>
      <div className="flex items-center justify-center">
        <div>
          <div>
            <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">Faça Seu Login</h2>
          </div>
          <form style={{ width:"20rem" }} className="mt-8 space-y-8">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <input style={{ marginBottom: "0.5rem" }} id="email-address" name="email" type="email" required className="relative w-full rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
              </div>
              <div>
                <input id="password" name="password" type="password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center" >
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 focus:bg-indigo-700" />
                <label className="ml-2 block text-sm text-white">Remember me</label>
              </div>
            </div>
            <div>
              <button  type="button" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                  </svg>
                </span>
                Login
              </button>
            </div>
            <div className="text-sm flex w-full justify-center">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}