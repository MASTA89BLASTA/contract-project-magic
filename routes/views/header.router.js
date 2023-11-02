const router = require("express").Router();

const header = require("../../components/Header");

router.get("/", async (req, res) => {
  const html = res.renderComponent(header);
  res.send(html);
});

module.exports = router;
