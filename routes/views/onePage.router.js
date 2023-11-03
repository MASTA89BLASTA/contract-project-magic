const router = require('express').Router()

const{Card}=require('../../db/models')

const CardPage = require('../../components/CardPage')

router.get("/:cardId", async (req, res) => {
  try {
    const { cardId } = req.params;
    const card = await Card.findOne({ where: { id: cardId } });

    const html = res.renderComponent(CardPage, { card });
    res.send(html);
  } catch (error) {
    res.status(500).send(error);
  }
})

module.exports = router