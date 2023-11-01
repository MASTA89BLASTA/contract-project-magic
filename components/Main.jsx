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
          <input id="login" name="login" placeholder="Login" type="text" />
          <input id="email" name="email" placeholder="Email" type="text" />
          <input id="pass" name="pass" placeholder="Password" type="password" />
          <input id="repass" name="repass" placeholder="Repeat password" type="password" />
        </div>
        <button className="button-login" type="submit">
          <span>
            Reset password
            <br />
            Sign in
            <br />
            Sign up
          </span>
        </button>

        <select name="user_city">
          <optgroup label="Россия">
            <option value="1">Москва</option>
            <option value="2">Санкт-Петербург</option>
            <option value="3">Новосибирск</option>
          </optgroup>
          <optgroup label="Украина">
            <option value="4">Киев</option>
            <option value="5">Харьков</option>
            <option value="6">Львов</option>
          </optgroup>
          <optgroup label="Беларусь">
            <option value="7">Минск</option>
            <option value="8">Бобруйск</option>
            <option value="9">Гомель</option>
          </optgroup>
        </select>

        <section className="container">
          <div className="dropdown">
            <select name="one" className="dropdown-select">
              <option value="">Select…</option>
              <option value="1">Option #1</option>
              <option value="2">Option #2</option>
              <option value="3">Option #3</option>
            </select>
          </div>
          <div className="dropdown dropdown-dark">
            <select name="two" className="dropdown-select">
              <option value="">Select…</option>
              <option value="1">Option #1</option>
              <option value="2">Option #2</option>
              <option value="3">Option #3</option>
            </select>
          </div>
        </section>

        <script defer src="./js/scripts.js" />
      </form>
    </Layout>
  );
};
