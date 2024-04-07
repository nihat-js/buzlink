const { Router } = require("express");
const {
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
} = require("../controllers/user.controller.js");
const { verifyJWT } = require("../middlewares/auth.middleware.js");

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

// secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);

module.exports = router;
