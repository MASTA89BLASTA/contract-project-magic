const express = require("express");
const morgan = require("morgan");
const path = require("path");

// подключаем свою мидлварку
const ssr = require("../middlewares/ssr");

function serverConfig(app) {
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
}

module.exports = serverConfig;
