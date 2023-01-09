import { Routes, Route } from "react-router-dom";
import { PageCats } from "../Page/Cats";
import { PageDogs } from "../Page/Dogs";
import { PageHome } from "../Page/Home";
import { PageLogin } from "../Page/Login";
import { PageRegisterUser } from "../Page/Register";
export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<PageLogin/>}></Route>
      <Route path="/home" element={<PageHome/>}></Route>
      <Route path="/cats" element={<PageCats/>}></Route>
      <Route path="/dogs" element={<PageDogs/>}></Route>
      <Route path="/register" element={<PageRegisterUser/>}></Route>
      <Route path="*" element={<PageHome/>}></Route>
    </Routes>
  )
}