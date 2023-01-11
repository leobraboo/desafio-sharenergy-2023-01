import { request, response, Router } from "express"
import { userController } from "../controllers"
import { authMiddlewares } from "../util/middleware/authMiddleware"
const router = Router()

router.post("/save", authMiddlewares, (request, response) => {
  return userController.save(request, response)
})

router.get("/findall", authMiddlewares, (request, response) => {
  return userController.findAll(request, response)
})

router.delete("/delete/:id", authMiddlewares, (request, response) => {
  return userController.delete(request, response)
})

router.put("/update/:id", authMiddlewares, (request, response) => {
  return userController.update(request, response)
})

export default router