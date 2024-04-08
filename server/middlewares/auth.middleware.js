const jwt = require("jsonwebtoken")
const { User } = require("../models/user.model.js")
const { invalidTokens } = require("../index.js")

const verifyJWT = async (req, res, next) => {
  try {
    const refreshToken = req.cookies?.refresh_token
    const accessToken = req.header("Authorization")?.replace("Bearer ", "")

    // return res.status(401).json({ refreshToken, accessToken })


    // checking refresh token from blacklist
    if (!refreshToken || !accessToken || invalidTokens.findIndex(item => item === refreshToken) > -1) {
      res.clearCookie("refresh_token")
      return res.status(401).json({ message: "Token expired or invalidddd " })
    }


    const accessTokenData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    if (accessTokenData) {
      req.user = accessTokenData
      return next()
    }

    // else
    const user = await Session.findById({ token: refreshToken, deletedAt: { $exists: false } },
    ).populate({
      path: 'userId',
      model: "User",
      select: "_id email"
    })

    if (!user) {
      return res.clearCookie("refresh_token").status(401).json({ message: "Auth error" })
    }
    const newAccessToken = jwt.sign(
      {
        _id: user._id,
        email: user.email
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15d",
      }
    )
    res.header("Authorization", "Bearer " + newAccessToken)
    req.user = user
    next()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


module.exports = { verifyJWT } 