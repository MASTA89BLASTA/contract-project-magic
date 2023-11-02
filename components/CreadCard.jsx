const React = require("react");
const Layout = require("./Layout");
const Header = require("./Header");

module.exports = function CreadCard() {
  return (
    <Layout>
      <Header />
      <form className="form-add-Card">
        <div className="mb-3">
          <label className="form-label">
            Имя:
            <input type="text" className="name" name="name" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Изображение:
            <input
              type="text"
              className="img"
              name="img"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Стоимость:
            <input
              type="text"
              className="price"
              name="price"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Изнашиваемость:
            <input
              type="text"
              className="level"
              name="level"
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Отправить
        </button>

        <script defer src="./js/scriptsCards.js" />

      </form>
    </Layout>
  );
};
