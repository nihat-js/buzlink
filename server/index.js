const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv")
const connectDB = require("./db/db.js")
const authRouter = require("./routes/auth.routes.js")
const { authMiddleware } = require("./middlewares/auth.middleware.js")
const { URLSchema } = require("./models/url.model.js")
const URL = require("./models/url.model.js")

dotenv.config({
  path: "./.env",
})


const app = express()

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    exposedHeaders: "Authorization"
  })
)

app.use(express.json())
app.use(cookieParser())

app.get('/test', (req, res) => res.send('test'))
app.use("/api/auth", authRouter)

app.post("/api/urls", authMiddleware, async (req, res) => {
  let destinationURL = req.body.destinationURL
  if (!destinationURL) {
    return res.send(403).json({ message: "Invalid URL" })
  }
  try {
    let shortenedURL = generateRandomShortURL(6)
    let statsURL = generateRandomShortURL(6)
    let u = new URL({ userId: req.user._id, destinationURL, shortenedURL, statsURL })
    await u.save()
    return res.status(200).json({ message: "Success" })
  } catch (e) {
    console.log(e)

  }
  console.log(req.body)
})

app.get("/api/urls", authMiddleware, async (req, res) => {
  let urls = await URL.find({ userId: req.user._id },
    "destinationURL shortenedURL statsURL totalVisits createdAt  ").exec()
  console.log({ urls })
  return res.status(200).json({
    data: urls
  })
})

app.get("")

function generateRandomShortURL(length = 6) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomShortUrl = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    randomShortUrl += chars.charAt(randomIndex);
  }

  return randomShortUrl;
}


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server listening on port ${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.log("MongoDB connection failed", error)
  })

