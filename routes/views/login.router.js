const router = require("express").Router();
const bcrypt = require("bcrypt");

const { User } = require("../../db/models");
const generateTokens = require("../../utils/authUtils");
const loginMain = require("../../components/login/loginMain");

router.get("/", async (req, res) => {
  res.send(res.renderComponent(loginMain));
});
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (email === "" && password === "") {
    return res.status(400).json({ success: false, email: "Заполните логин", password: "Заполните пароль" });
  }
  if (email === "") {
    return res.status(400).json({
      success: false, email: "Заполните логин", password, value: "NoEmail",
    });
  }
  if (password === "") {
    return res.status(400).json({
      success: false, email, password: "Заполните пароль", value: "NoPassword",
    });
  }
  try {
    // проверить, есть ли такой юзер в бд
    const userInBD = await User.findOne({ where: { email }, raw: true });

    const isUser = await bcrypt.compare(password, userInBD.password);

    if (!userInBD || !isUser) {
      return res.status(404).json({
        success: false,
        message: "Неправильный логин или пароль",
      });
    }
    //  проверить пароли
    // console.log('Пароль прошел');
    // сгенерируем jwt токены
    const { accessToken, refreshToken } = generateTokens({
      user: { id: userInBD.id, name: userInBD.name, email: userInBD.email },
    });

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
      message: `Аутентификация ${userInBD.name} прошла успешно`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});
module.exports = router;
