let {Router} = require("express")
const { isUserLoggedIn } = require("../middlewares/auth")
Router = new Router()

const codeController = require("../controllers/requests/codeController")
Router.get("/:id/code", isUserLoggedIn, codeController.get)
Router.post("/:id/code", isUserLoggedIn, codeController.post)

const doneController = require("../controllers/requests/doneController")
Router.get("/:id/done", isUserLoggedIn, doneController.get)

const singleController = require("../controllers/requests/singleController")
Router.get("/:id", isUserLoggedIn, singleController.get)

const allControllers = require("../controllers/requests/allController")
Router.get("/", isUserLoggedIn, allControllers.get)

module.exports = Router