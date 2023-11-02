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
              <button className="button-limitirovannay" type="submit">Купить сейчас</button>
            </div>
            <div>favorites</div>
          </div>

          <div id="wrapper">
            <div id="arrow" />
            <input className="login" name="login" placeholder="Login" type="text" />
            <input className="email" name="email" placeholder="Email" type="text" />
            <input className="password" name="password" placeholder="Password" type="password" />
            <input className="repass" name="repass" placeholder="Repeat password" type="password" />
          </div>
          {/* <script defer src="./js/scripts.js" /> */}
        </form>
      </body>
    </Layout>
  );
};
