import { request, response, Router } from "express"
import { userController } from "../controllers"

const router = Router()

router.post("/save", (request, response) => {
  return userController.save(request, response)
})

router.get("/findall", (request, response) => {
  return userController.findAll(request, response)
})

router.delete("/delete/:id", (request, response) => {
  return userController.delete(request, response)
})

router.put("/update/:id", (request, response) => {
  return userController.update(request, response)
})

export default router