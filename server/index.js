const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken')
const app = express()
const crypto = require('crypto')
const { authenticate } = require("./middlewares/auth")
const { UserSchema } = require("./models/UserSchema")
const cors = require('cors');


require('dotenv').config()

app.use(express.json())
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_CONNECT_STRING, {})

// User schema



// User model
const User = mongoose.model('User', UserSchema)



// Middleware to check if the user is authenticated


// Registration route
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  console.log("Registering user... ", email, password)

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1 hour' });
    user.token = token
    await user.save();
    res.status(200)
    res.cookie('token', token, { httpOnly: true, })
    res.json({ message: 'Registration successful' });

  } catch (error) {
    console.log(error);
  }
})

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1 hour'
    });
    res.json({ token });
  } catch (error) {
    next(error);
  }
})

// User profile route


app.get('/login-with-token', (req, res) => {
  const token = req.cookies?.get('token')
  if (!token) return res.status(402).json({ message: "Not authorized" })
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ message: "Not authorized" })
    }
    return res.status(200).json({
      profileImage: decodedToken.profileImage,
      email: decodedToken.email
    })
  })
})

app.get('/profile', authenticate, (req, res) => {
  res.send(req.user)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
