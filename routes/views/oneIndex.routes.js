const router = require("express").Router();

router.get("/", (req, res) => {
  res.redirect("/main");
});

module.exports = router;
