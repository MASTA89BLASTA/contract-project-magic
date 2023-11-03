const React = require("react");

module.exports = function CardPage({ card }) {
  return (
    <div className="card js-card" data-id={card.id}>
      <h1>
        <a href={`/card/${card.id}`}>{card.name}</a>
      </h1>
      <img style={{ width: "300px" }} src={card.img} alt="pic" />
      <p>
        {card.name}, {card.price} ₸, {card.level}.
      </p>

      <button
        type="button"
        className="btn btn-danger js-btn-remove"
        style={{ marginLeft: "10px" }}
      >
        Кик его !!!
      </button>
    </div>
  );
};
