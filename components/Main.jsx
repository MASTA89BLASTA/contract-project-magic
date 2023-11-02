const React = require("react");
const Layout = require("./Layout");
const Header = require("./Header");

module.exports = function Main({ cards }) {
  console.log(cards);
  return (
    <Layout>
      <Header />
      <div className="js-card-container facts-container">
        {cards.map(card => (
          <img style={{ width: "200px" }} src={card.img} alt={card.name} />
        ))}
      </div>
    </Layout>
  );
};
