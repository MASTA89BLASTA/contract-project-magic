const router = require("express").Router();
const BasketCase = require("../../components/BasketCase");

router.get("/", async (req, res) => {
  const html = res.renderComponent(BasketCase);
  res.send(html);
});
module.exports = router;
