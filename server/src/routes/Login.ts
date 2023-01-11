import { request, response, Router } from "express"
import { loginController } from "../controllers" 

const router = Router()

router.post("/save", (request, response) => {
  return loginController.save (request, response)
})

router.post("/auth/token", (request, response) => {
  return loginController.login(request, response)
})

export default router
