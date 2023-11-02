const router = require("express").Router();

router.get("/", (req, res) => {
  res.redirect("/form");
});

module.exports = router;
