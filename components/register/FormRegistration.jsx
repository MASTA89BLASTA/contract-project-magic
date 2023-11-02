const React = require("react");
const Layout = require("../Layout");

module.exports = function FormRegistration({ cards }) {
  return (
    <Layout>
      <form className="form-reg">
        <input
          checked="<%= true %>"
          id="signin"
          name="action"
          type="radio"
          value="signin"
        />
        <label htmlFor="signin">Sign in</label>
        <input id="signup" name="action" type="radio" value="signup" />
        <label htmlFor="signup">Sign up</label>
        <input id="reset" name="action" type="radio" value="reset" />
        <label htmlFor="reset">Reset</label>
        <div id="wrapper">
          <div id="arrow" />
          <input
            className="login"
            name="login"
            placeholder="Login"
            type="text"
          />
          <input
            className="email"
            name="email"
            placeholder="Email"
            type="text"
          />
          <input
            className="password"
            name="password"
            placeholder="Password"
            type="password"
          />
          <input
            className="repass"
            name="repass"
            placeholder="Repeat password"
            type="password"
          />
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

        <form>
          <input type="reset" className="reset" value="Clear it!" />
          <div className="__select">
            <div className="__select__content">
              <input
                id="singleSelect0"
                checked="<%= true %>"
                className="__select__input"
                type="radio"
                value="Москва"
                name="singleSelect"
              />
              <label htmlFor="singleSelect0" className="__select__label">
                Москва
              </label>

              <input
                id="singleSelect1"
                className="__select__input"
                type="radio"
                value="Санкт-Петербург"
                name="singleSelect"
              />
              <label htmlFor="singleSelect1" className="__select__label">
                Санкт-Петербург
              </label>

              <input
                id="singleSelect2"
                className="__select__input"
                type="radio"
                value="Новосибирск"
                name="singleSelect"
              />
              <label htmlFor="singleSelect2" className="__select__label">
                Новосибирск
              </label>

              <input
                id="singleSelect3"
                className="__select__input"
                type="radio"
                value="Казань"
                name="singleSelect"
              />
              <label htmlFor="singleSelect3" className="__select__label">
                Казань
              </label>

              <input
                id="singleSelect4"
                className="__select__input"
                type="radio"
                value="Воронеж"
                name="singleSelect"
              />
              <label htmlFor="singleSelect4" className="__select__label">
                Воронеж
              </label>

              <input
                id="singleSelect5"
                className="__select__input"
                type="radio"
                value="Екатеринбург"
                name="singleSelect"
              />
              <label htmlFor="singleSelect5" className="__select__label">
                Екатеринбург
              </label>

              <input
                id="singleSelect6"
                className="__select__input"
                type="radio"
                value="Саратов"
                name="singleSelect"
              />
              <label htmlFor="singleSelect6" className="__select__label">
                Саратов
              </label>

              <input
                id="singleSelect7"
                className="__select__input"
                type="radio"
                value="Энгельс"
                name="singleSelect"
              />
              <label htmlFor="singleSelect7" className="__select__label">
                Энгельс
              </label>
            </div>
          </div>
        </form>

        <script defer src="./js/scripts.js" />
      </form>
    </Layout>
  );
};
