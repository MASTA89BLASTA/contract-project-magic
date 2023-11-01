const React = require('react');
const Layout = require('../Layout');

module.exports = function loginMain() {
  return (
    <Layout>
      <form className="form-login">
        <label htmlFor="username">email</label>
        <input className="form-styling login-email" type="text" name="email" value="" />
        <label htmlFor="password">Password</label>
        <input className="form-styling login-password" type="text" name="password" value="" />
        <input type="checkbox" id="checkbox" />
        <button className="button" type="submit" name="button-login">login</button>
        <script defer src="./js/scriptLogin.js" />
      </form>
    </Layout>
  );
};
