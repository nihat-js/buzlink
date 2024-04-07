const User = require("../models/user.model.js")
const jwt = require("jsonwebtoken")

const registerUser = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" })
  }

  try {
    let user = new User({ email, password })
    user.refresh_token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    )
``
    user = await user.save()
    const accessToken = jwt.sign(
      {
        _id: user._id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15d",
      }
    )
    const options = {
      maxAge: 1000 * 60 * 150, // would expire after 15 minutes
      httpOnly: true, // The cookie only accessible by the web server
      // signed: true // Indicates if the cookie should be signed
    }
    res.cookie("refresh_token", user.refresh_token, options)
    return res.status(201).json({
      message: "User created successfully",
      data: {
        accessToken,
        email: user.email,
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

const generateAccessAndRefreshTokens = async (userId) => {
  // try {
  //   const user = await User.findById(userId)
  //   const accessToken = user.generateAccessToken()
  //   const refreshToken = user.generateRefreshToken();

  //   user.refreshToken = refreshToken;

  //   await user.save({ validateBeforeSave: false });

  //   console.log(user.refreshToken);

  //   return { accessToken, refreshToken };
  // } catch (error) {
  //   return res.status(500).json({ message: error.message });
  // }
}

const loginUser = async (req, res) => {
  const { email, password, token } = req.body;


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

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user._id
    );

    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        user: loggedInUser,
        accessToken,
        refreshToken,
        message: "Logged in successfully",
      });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const logoutUser = async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { refreshToken: undefined },
    },
    { new: true }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", options)
    .cookie("refreshToken", options)
    .json({ user: {}, message: "Logged out successfully" });
};

const refreshToken = async (req, res) => {
  const options = {
    httpOnly: true,
    secure: true,
  };
  const incomingRefreshToken = req.cookies.refresh_token
  if (!incomingRefreshToken) {
    return res.status(401).json({ message: "Refresh token not found" });
  }

  try {

    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    const user = await User.findById(decodedToken?._id);
    if (!user) {

      return res.cookie("refresh_token", "", { httpOnly: true }).status(401).json({ message: "Refresh token is expired 1" });
    }
    if (user?.refresh_token !== incomingRefreshToken) {
      return res.status(401).json({ message: "Refresh token expired 2" });

    }

    const accessToken = jwt.sign(
      {
        _id: user._id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15d",
      }
    )

    return res
      .status(200)
      // .cookie("accessToken", accessToken, options)
      .json({
        message: "Access token refreshed", data: {
          email: user.email,
          profileImage: user.profileImage,
          accessToken: accessToken,
        }
      });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser, logoutUser, refreshToken }
