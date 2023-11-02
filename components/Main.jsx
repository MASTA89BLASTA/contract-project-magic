const React = require("react");
const Layout = require("./Layout");

module.exports = function Main() {
  return (
    <Layout>
      <form className="form-main">

        <div id="wrapper">
          <div id="arrow" />
          <input className="login" name="login" placeholder="Login" type="text" />
          <input className="email" name="email" placeholder="Email" type="text" />
          <input className="password" name="password" placeholder="Password" type="password" />
          <input className="repass" name="repass" placeholder="Repeat password" type="password" />
        </div>

        {/* <script defer src="./js/scripts.js" /> */}
      </form>
    </Layout>
  );
};
