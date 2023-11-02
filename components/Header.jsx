const React = require("react");

function Header() {
  return (
    <header className="header">
      <ul className="cards-header_ul">
        <li>
          <a href="/main">Главная</a>
        </li>
        <li>
          <a href="/collection">Моя коллекция</a>
        </li>
        <li className="header-basket_li">
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
