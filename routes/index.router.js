const router = require("express").Router();

// подключаем роутеры

const oneIndexRouter = require("./views/oneIndex.routes");
const registerFormRouter = require("./views/Form.router");
const registerRouter = require("./views/register.router");
const loginRouter = require("./views/login.router");
const mainRouter = require("./views/main.router");
const headerRouter = require("./views/header.router");

// подключаем роутеры

router.use("/", oneIndexRouter);
router.use("/form", registerFormRouter);
router.use("/login", loginRouter);
router.use("/register", registerRouter);
router.use("/main", mainRouter);
router.use("/header", headerRouter);

module.exports = router;
