require("@babel/register");

const ReactDOMServer = require("react-dom/server");
const React = require("react");

const express = require("express");
const createError = require("http-errors");

// Импортируем созданный в отдельный файлах рутеры.

const Error = require("./components/Error");
const serverConfig = require("./config/serverConfig");
const indexRouter = require("./routes/index.router");

const app = express();

serverConfig(app);

const PORT = process.env.PORT ?? 3000;

app.use("/", indexRouter);

// Если HTTP-запрос дошёл до этой строчки, значит ни один из ранее встречаемых рутов не ответил
// на запрос.Это значит, что искомого раздела просто нет на сайте.Для таких ситуаций используется
// код ошибки 404. Создаём небольшое middleware, которое генерирует соответствующую ошибку.
app.use((req, res, next) => {
  const error = createError(
    404,
    "Запрашиваемой страницы не существует на сервере."
  );
  next(error);
});

// Отлавливаем HTTP-запрос с ошибкой и отправляем на него ответ.
app.use((err, req, res) => {
  // Получаем текущий ражим работы приложения.
  const appMode = req.app.get("env");
  // Создаём объект, в котором будет храниться ошибка.
  let error;

  // Если мы находимся в режиме разработки, то отправим в ответе настоящую ошибку.
  // В противно случае отправим пустой объект.
  if (appMode === "development") {
    error = err;
  } else {
    error = {};
  }

  // Записываем информацию об ошибке и сам объект ошибки в специальные переменные,
  // доступные на сервере глобально, но только в рамках одного HTTP - запроса.
  res.locals.message = err.message;
  res.locals.error = error;

  // Задаём в будущем ответе статус ошибки. Берём его из объекта ошибки, если он там есть.
  // В противно случае записываем универсальный стату ошибки на сервере - 500.
  res.status(err.status || 500);
  // Ренедрим React-компонент Error и отправляем его на клиент в качестве ответа.
  const errorPage = React.createElement(Error, res.locals);
  const html = ReactDOMServer.renderToStaticMarkup(errorPage);
  res.write("<!DOCTYPE html>");
  res.end(html);
});

app.listen(PORT, () => {
  console.log(`Server started port: ${PORT}`);
});
