const React = require("react");

function Header() {
  return (
    <header className="header">
      <ul className="cards-header_ul">
        <li className="header-li">
          <a className="header-a" href="/main">
            Главная
          </a>
        </li>
        <li className="header-li">
          <a className="header-a" href="/card">
            Создать картинку
          </a>
        </li>
        <li className="header-li">
          <a className="header-a" href="/">
            Выйти
          </a>
        </li>
        <li className="header-li header-basket_li">
          <a href="/basket">
            <img
              className="basket-img"
              src="../img/shopping-basket_40513.png"
              alt="#"
            />
          </a>
        </li>
      </ul>
    </header>
  );
}

module.exports = Header;
