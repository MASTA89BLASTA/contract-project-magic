const React = require("react");
const Layout = require("./Layout");
const Header = require("./Header");

module.exports = function BasketCase() {
  return (
    <Layout>
      <div className="bascket-wrapper">
        <h1>Моя корзина</h1>
      </div>
    </Layout>
  );
};
