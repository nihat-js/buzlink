const User = require("../models/user.model.js")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")
const { Session } = require("../models/session.model.js")


async function registerUser(req, res) {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" })
  }

  try {
    let user = new User({ email, password })
    user = await user.save()
    const token = crypto.randomBytes(32).toString("hex")
    let session = new Session({ userId: user._id, token })
    await session.save()
    const jwt_ = jwt.sign({ token }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1 day", })

    const options = {
      // maxAge: 1000 * 60 * 1440, // would expire after 15 minutes
      httpOnly: true, // The cookie only accessible by the web server
      // signed: true // Indicates if the cookie should be signed
    }
    res.cookie("jwt", jwt_, options)
    return res.status(201).json({
      message: "User created successfully",
      data: {

      },
    })
  }
  catch (error) {
    console.log(error)
    if (error.code === 11000) {
      return res.status(409).json({ message: "Email is used by someone" })
    }
    // return res.status(410).json(error);
  }
}

// const refreshToken = async (req, res) => {
//   const refreshToken = req.cookies?.refresh_token
//   if (!refreshToken) {
//     return res.status(401).json({ message: "Not authorized to refresh token" })
//   }
//   try {
//     const user = await Session.findOne({ token: refreshToken, deletedAt: { $exists: false } },
//     ).populate({
//       path: 'userId',
//       model: "User",
//       select: "_id email"
//     })
//     if (!user) {
//       return res.clearCookie("refresh_token").status(401).json({ message: "Auth error" })
//     }
//     const data = {
//       _id: user._id,
//       email: user.userId.email
//     }
//     const newAccessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15d", })
//     res.header("Authorization", "Bearer " + newAccessToken)
//     req.user = user
//     return res.status(200).json({ message: "OK", data })

//   } catch (err) {
//     return res.status(500).send({ message: err.message })
//   }
// }

const loginUser = async (req, res) => {
  const { email, password, } = req.body;


  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = crypto.randomBytes(32).toString("hex")
    let session = new Session({
      userId: user._id,
      ipAddress: getIp(),
      token
    })
    await session.save()

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("jwt", accessToken, options)
      .json({
        message: "Logged in successfully",
      });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const logoutUser = async (req, res) => {
  res.clearCookie("jwt")
  return res
    .status(200)
    .cookie("jwt", options)
    .json({ user: {}, message: "Logged out successfully" });
};


function getIp(req) {
  return req.connection.remoteAddress;
}


module.exports = { registerUser, loginUser, logoutUser }
