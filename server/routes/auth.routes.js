const { Router } = require("express")
const userController = require("../controllers/user.controller.js")
const { authMiddleware } = require("../middlewares/auth.middleware.js")

const router = Router()

router.post("/register", userController.registerUser)
router.post("login", userController.loginUser)
router.post("/logout", authMiddleware, userController.logoutUser)


module.exports = router
