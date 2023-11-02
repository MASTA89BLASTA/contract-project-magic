const router = require("express").Router();

const registerFormRouter = require("../../components/register/FormRegistration");

router.get("/", (req, res) => {
  const html = res.renderComponent(registerFormRouter);
  res.send(html);
});
// подключаем роутеры

// подключаем роутеры

module.exports = router;
