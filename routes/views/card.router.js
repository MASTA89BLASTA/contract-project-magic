const router = require("express").Router();
const bcrypt = require("bcrypt");

const { Card } = require("../../db/models");
const CreadCard = require("../../components/CreadCard");

router.get("/", async (req, res) => {
  const html = res.renderComponent(CreadCard);
  res.send(html);
});

router.post("/", async (req, res) => {
  let {
    name, img, price, level,
  } = req.body;
  console.log(1);
  if (name === "" || img === "" || price === "" || level === "") {
    if (!name) name = "Введите имя карточки";
    if (!img) img = "Вставьте картинку";
    if (!price) price = "Введите стоимость";
    if (!level) level = "Укажите уровень износа";

    return res.status(400).json({
      success: false, name, img, price, level,
    });
  }
  console.log(2);

  try {
    // если пользователь с таким img уже есть, возвращаем ошибку
    const foundCard = await Card.findOne({ where: { name } });
    if (foundCard) {
      return res.status(400).json({
        success: false, name: "Карточка с таким", img: "именем уже существует", price: "", repass: "",
      });
    }
    console.log(3);

    const сart = await Card.create({
      name,
      img,
      price,
      level,
      user_id: res.locals.user.id, // привязываю факт к юзеру
    });
    console.log(4);

    const html = res.renderComponent(CreadCard, { сart }, { doctype: false });

    res.json({ success: true, cardHtml: html });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Ошибка на сервере" });
  }
});

router.delete("/:cardId", async (req, res) => {
  const { cardId } = req.params;
  console.log(cardId);
  try {
    // отправить запрос к бд
    const cardDeleted = await Card.destroy({
      where: { id: cardId, user_id: res.locals.user.id }, // проверка на idor
    });
    // если было удалено 0 фактов
    if (!cardDeleted) {
      return res.status(400).json({ message: "Ошибка в запросе" });
    }

    // просто вернуть статус в ответе без каких-либо данных
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
