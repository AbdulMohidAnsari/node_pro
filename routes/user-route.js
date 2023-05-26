const express = require("express")
const route = express.Router()
const { userRegisteration, login, changepassword, loggeduser, changeUserPasswordbyEmailLink, resetUserPasswordbyLink } = require("../controller/user-controller")
const checkUserAuth = require("../middleware/auth")

route.use("/loggeduser", checkUserAuth)

// public routes
route.post("/userRegisteration", userRegisteration)
route.get("/login", login)
route.patch("/send-Email-Link-to-User-for-Password-change", changeUserPasswordbyEmailLink)
route.patch("/reset-User-Password-by-Link/:id/:secret", resetUserPasswordbyLink)

//private route
route.patch("/changepassword", checkUserAuth, changepassword)
route.get("/loggeduser", loggeduser)

module.exports = route