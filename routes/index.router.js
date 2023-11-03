const router = require("express").Router();

// подключаем роутеры

const oneIndexRouter = require("./views/oneIndex.routes");
const registerFormRouter = require("./views/Form.router");
const registerRouter = require("./views/register.router");
const loginRouter = require("./views/login.router");
const mainRouter = require("./views/main.router");
const headerRouter = require("./views/header.router");
const cardRouter = require("./views/card.router");
const BasketCase = require("./views/bascket.router");
const verifyAccess = require("../middlewares/verifyAccess");

// подключаем роутеры

router.use("/", oneIndexRouter);
router.use("/form", registerFormRouter);
router.use("/login", loginRouter);
router.use("/register", registerRouter);
router.use("/main", verifyAccess, mainRouter);
router.use("/header", headerRouter);
router.use("/card", cardRouter);
router.use("/basket", BasketCase);

module.exports = router;
