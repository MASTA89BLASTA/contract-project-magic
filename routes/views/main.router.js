const router = require("express").Router();

const mainRouter = require("../../components/Main");

router.get("/", (req, res) => {
  const html = res.renderComponent(mainRouter);
  res.send(html);
});
// подключаем роутеры

// подключаем роутеры

module.exports = router;
