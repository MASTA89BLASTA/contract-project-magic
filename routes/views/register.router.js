const router = require("express").Router();
const bcrypt = require("bcrypt");

const { User } = require("../../db/models");
const RegisterMain = require("../../components/register/RegisterMain");

router.get("/", async (req, res) => {
  // const { access } = req.cookies;
  // console.log(access);
  res.send(res.renderComponent(RegisterMain));
});

router.post("/", async (req, res) => {
  const { login, email, password } = req.body;
  // console.log('1234567');
  // console.log('1');
  if (login === "" || email === "" || password === "") {
    res.status(400).json({ success: false, message: "Заполните все поля" });
  }
  // console.log('2');
  try {
    // если пользователь с таким email уже есть, возвращаем ошибку
    const foundUser = await User.findOne({ where: { email } });
    if (foundUser) {
      return res
        .status(400)
        .json({ success: false, error: "Такой пользователь уже существует" });
    }
    // console.log('3');
    const hash = await bcrypt.hash(password, 10);
    // console.log('4');
    // console.log(123);
    const user = await User.create({ login, email, password: hash });
    // console.log('5');

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
