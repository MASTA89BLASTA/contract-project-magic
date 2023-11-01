const router = require("express").Router();

// подключаем роутеры

const oneIndexRouter = require("./views/oneIndex.routes");
const mainRouter = require("./views/main.router");
const registerRouter = require("./views/register.router");
const loginRouter = require("./views/login.router");

// подключаем роутеры

router.use("/", oneIndexRouter);
router.use("/main", mainRouter);
router.use("/register", registerRouter);
router.use("/login", loginRouter);

module.exports = router;
