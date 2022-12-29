import { Routes, Route } from "react-router-dom";
import { PageHome } from "../Page/Home";
import { PageLogin } from "../Page/Login";
export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<PageLogin/>}></Route>
      <Route path="/home" element={<PageHome/>}></Route>
    </Routes>
  )
}