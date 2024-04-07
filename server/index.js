const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv")
const connectDB = require("./db/db.js")
const authRouter = require("./routes/auth.routes.js")

dotenv.config({
  path: "./.env",
})

const app = express()

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
)

app.use(express.json())
app.use(cookieParser())

app.get('/test', (req, res) => res.send('test'))
app.use("/api/auth", authRouter)


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server listening on port ${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.log("MongoDB connection failed", error)
  })
