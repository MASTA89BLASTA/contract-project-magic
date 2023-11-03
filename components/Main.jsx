const React = require("react");
const Layout = require("./Layout");
const Header = require("./Header");

module.exports = function Main({ cards }) {
  // console.log(cards);
  return (
    <Layout>
      <Header />
      <body className="body-main">
        <div className="js-card-container facts-container">
          {cards.map(card => (
            <div className="cards-wrapper">
              <img
                className="cards-img"
                src={card.img}
                alt={card.name}
              />
              <p className="cards-p">
                {card.name}, {card.price} , {card.level}
              </p>
            </div>
          ))}
        </div>
      </body>
    </Layout>
  );
};
