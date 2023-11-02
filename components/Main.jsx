const React = require("react");
const Layout = require("./Layout");

module.exports = function Main() {
  return (
    <Layout>
      <body className="body-main">
        <form className="form-main">
          <div className="top-dev-main">
            <div>logo</div>
            <div>favorites</div>
            <div>avatarka</div>
            <div>clear</div>
          </div>
          <div className="top-dev-center">
            <div className="limitirovan-full">
              <div className="block">Лимитораванная карта</div>
              <div className="block">Доминик Торетто</div>
              <div className="text-box">
                <a href="#" className="btn btn-white btn-        animate">click me</a>
              </div>
              <button className="button-limitirovannay" type="submit">Купить сейчас</button>
            </div>
            <div>favorites</div>
          </div>

          {/* <script defer src="./js/scripts.js" /> */}
        </form>
      </body>
    </Layout>
  );
};
