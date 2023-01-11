import { Router } from "express";
import userRouter from "./User"
import loginRouter from "./Login"
const router = Router();
router.use("/user", userRouter)
router.use("/login", loginRouter)

export default router