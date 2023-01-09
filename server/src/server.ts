import "dotenv/config"
import app from "./app"

const PORT = process.env.PORT

app.listen(process.env.PORT, () =>{
  console.log(`server running in http://localhost:${PORT}`)
})

