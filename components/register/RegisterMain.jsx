const React = require("react");
const Layout = require("../Layout");

module.exports = function registerMain() {
  return (
    <Layout>
      <form className="form-register">
        <label htmlFor="username">Login</label>
        <input className="form-styling" type="text" name="login" placeholder="" />
        <label htmlFor="email">email</label>
        <input className="form-styling" type="text" name="email" placeholder="" />
        <label htmlFor="password">Password</label>
        <input className="form-styling" type="text" name="password" placeholder="" />
        <button className="button" type="submit" name="button-register">register</button>
        <script defer src="./js/scriptsRegister.js" />
      </form>
    </Layout>
  );
};
