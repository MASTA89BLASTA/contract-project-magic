const router = require("express").Router();

// const { User } = require("../../db/models");
// const generateTokens = require("../../utils/authUtils");
const main = require("../../components/Main");

router.get("/", async (req, res) => {
  const html = res.renderComponent(main);
  res.send(html);
});

module.exports = router;
