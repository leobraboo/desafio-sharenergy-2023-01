import { AppRoutes } from "./routes"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer theme="dark" />
    </>
  )
}

export default App
