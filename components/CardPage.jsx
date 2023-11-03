const React = require("react");
const Layout = require("./Layout");

module.exports = function CardPage({ card }) {
  return (
    <Layout>
      <div className="card js-card" data-id={card.id}>
        <h1>
          <a className="cards-a" href={`/card/${card.id}`}>
            {card.name}
          </a>
        </h1>
        <img style={{ width: "300px" }} src={card.img} alt="pic" />
        <p className="cards-p">
          {card.name}, {card.price} , {card.level}
        </p>
      </div>
    </Layout>
  );
};
