const React = require("react");
const Layout = require("./Layout");
const Header = require("./Header");

module.exports = function CreadCard() {
  return (
    <Layout>
      <Header />
      <body className="body-reg">

        <form className="form-add-Card">
          <input className="name" name="name" placeholder="Название картинки:" type="text" />
          <input className="img" name="img" placeholder="Изображение:" type="text" />
          <input className="price" name="price" placeholder="Стоимость:" type="text" />
          <input className="level" name="level" placeholder="Изнашиваемость:" type="text" />

          <button className="button-create" type="submit">
            Отправить
          </button>

          <script defer src="./js/scriptsCards.js" />

        </form>
      </body>

    </Layout>
  );
};
