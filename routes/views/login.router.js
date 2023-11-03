const router = require("express").Router();
const bcrypt = require("bcrypt");

const { User } = require("../../db/models");
const generateTokens = require("../../utils/authUtils");
// const loginMain = require("../../components/login/LoginMain");

// router.get("/", async (req, res) => {
//   res.send(res.renderComponent(loginMain));
// });
router.post("/", async (req, res) => {
  let { login, email, password } = req.body;

  if (login === "" || email === "" || password === "") {
    if (!login) login = "Введите ваш login";
    if (!email) email = "Введите ваш email";
    if (!password) password = "Введите пароль";

    return res.status(400).json({
      success: false,
      login,
      email,
      password,
    });
  }

  try {
    // проверить, есть ли такой юзер в бд
    const userInBD = await User.findOne({ where: { email }, raw: true });
    console.log(1);

    if (!userInBD) {
      return res.status(400).json({
        success: false,
        login: "Неверный логин",
        email: "email или пароль",
        password: "",
      });
    }

    const isUser = await bcrypt.compare(password, userInBD.password);
    console.log(2);

    if (!isUser) {
      return res.status(400).json({
        success: false,
        login: "Неверный логин",
        email: "email или пароль",
        password: "",
      });
    }
    console.log(3);
    //  проверить пароли
    // console.log('Пароль прошел');
    // сгенерируем jwt токены
    const { accessToken, refreshToken } = generateTokens({
      user: { id: userInBD.id, login: userInBD.login, email: userInBD.email },
    });
    console.log(4);

    // устанавливаем куки
    res.cookie("access", accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie("refresh", refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });

    // отправляем ответ
    return res.json({
      success: true,
      // message: `Аутентификация ${userInBD.name} прошла успешно`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});
module.exports = router;
