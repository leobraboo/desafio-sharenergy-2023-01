import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import { Router, Request, Response } from 'express'

import index from './routes/index'
import connect from './util/config/database'

const app = express()
const route = Router();

connect();

app.use(cors())
app.use(express.json())
app.use(route)
app.use(index)

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello" })
})

app.disable("X-Powered-By")

export default app