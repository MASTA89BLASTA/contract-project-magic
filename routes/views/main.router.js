const router = require("express").Router();

// const { User } = require("../../db/models");
// const generateTokens = require("../../utils/authUtils");
const main = require("../../components/Main");
const { Card } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const cards = await Card.findAll();
    const html = res.renderComponent(main, { cards });
    res.send(html);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
