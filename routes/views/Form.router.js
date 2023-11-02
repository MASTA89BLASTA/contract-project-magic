const router = require("express").Router();

const { Card } = require("../../db/models");

const registerFormRouter = require("../../components/register/FormRegistration");

router.get("/", async (req, res) => {
  const cards = await Card.findAll();

  const html = res.renderComponent(registerFormRouter, { cards });
  res.send(html);
});

module.exports = router;
