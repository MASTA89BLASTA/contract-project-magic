const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");

// подключаем свою мидлварку
const ssr = require("../middlewares/ssr");
const checkUser = require("../middlewares/verifyJWT");

function serverConfig(app) {
  // чтобы у объекта res и req появились методы cookie
  app.use(cookieParser());

  // настройки для сервера, чтобы при отправке формы появлялось req.body
  app.use(express.urlencoded({ extended: true }));

  // учу сервер читать json
  app.use(express.json());

  // мидлвары = промежуточная программа/станция
  app.use(ssr);

  //  чтобы логировались запросы
  app.use(morgan("dev"));

  // чтобы подключались стили (первым делом будет искать файлы в папке public)
  app.use(express.static(path.join(__dirname, "../public")));

  app.use(checkUser);
}

module.exports = serverConfig;
