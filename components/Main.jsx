const React = require("react");
const Layout = require("./Layout");

module.exports = function Main() {
  return (
    <Layout>
      <form className="form-main">
        <input checked="<%= true %>" id="signin" name="action" type="radio" value="signin" />
        <label htmlFor="signin">Sign in</label>
        <input id="signup" name="action" type="radio" value="signup" />
        <label htmlFor="signup">Sign up</label>
        <input id="reset" name="action" type="radio" value="reset" />
        <label htmlFor="reset">Reset</label>
        <div id="wrapper">
          <div id="arrow" />
          <input id="email" placeholder="Email" type="text" />
          <input id="pass" placeholder="Password" type="password" />
          <input id="repass" placeholder="Repeat password" type="password" />
        </div>
        <button type="submit">
          <span>
            Reset password
            <br />
            Sign in
            <br />
            Sign up
          </span>
        </button>
        <div id="hint">Click on the tabs</div>
        <script defer src="./js/scriptLogin.js" />
        <script defer src="./js/scripts.js" />
      </form>
    </Layout>
  );
};
