const router = require("express").Router();
const bcrypt = require("bcrypt");

const { User } = require("../../db/models");
// const RegisterMain = require("../../components/register/RegisterMain");

// router.get("/", async (req, res) => {
//   // const { access } = req.cookies;
//   // console.log(access);
//   res.send(res.renderComponent(RegisterMain));
// });

router.post("/", async (req, res) => {
  let {
    login, email, password, repass, city,
  } = req.body;

  if (login === "" || email === "" || password === "" || repass === "") {
    if (!login) login = "Введите ваш логин";
    if (!email) email = "Введите ваш email";
    if (!password) password = "Введите пароль";
    if (!repass) repass = "Введите подтверждение пароля";

    return res.status(400).json({
      success: false, login, email, password, repass,
    });
  }

  if (password !== repass) {
    return res.status(400).json({
      success: false, login: "Неверное", email: "подтверждение пароля", password, repass,
    });
  }

  try {
    // если пользователь с таким email уже есть, возвращаем ошибку
    const foundUser = await User.findOne({ where: { email } });
    if (foundUser) {
      return res.status(400).json({
        success: false, login: "Пользователь с таким", email: "email уже существует", password: "", repass: "",
      });
    }
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      login, email, password: hash, city,
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
