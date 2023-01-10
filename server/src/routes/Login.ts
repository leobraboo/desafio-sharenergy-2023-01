import { request, response, Router } from "express"
import { LoginController } from "../controllers/LoginController"

const router = Router()

router.post("/save", (request, response) => {
  return LoginController.save(request, response)
})

