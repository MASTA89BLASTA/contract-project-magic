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

  if (name === "" || img === "" || price === "" || level === "") {
    if (!name) name = "Введите ваш имя карточки";
    if (!img) img = "Вставьте картинку";
    if (!price) price = "Введите стоимость";
    if (!level) level = "Укажите уровень износа";

    return res.status(400).json({
      success: false, name, img, price, level,
    });
  }

  try {
    // если пользователь с таким img уже есть, возвращаем ошибку
    const foundCard = await Card.findOne({ where: { name } });
    if (foundCard) {
      return res.status(400).json({
        success: false, name: "Карточка с таким", img: "именем уже существует", price: "", repass: "",
      });
    }
    const user = await Card.create({
      name, img, price, level,
    });

    res.json({
      success: true,
      message: `Пользователь ${user.name} успешно зарегистрирован`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Ошибка на сервере" });
  }
});

module.exports = router;
