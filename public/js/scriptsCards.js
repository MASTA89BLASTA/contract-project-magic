const formAddCard = document.querySelector(".form-add-Card");

if (formAddCard) {
  formAddCard.addEventListener("submit", async (event) => {
    event.preventDefault();

    const {
      name, img, price, level,
    } = event.target;

    const response = await fetch("/card", {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        img: img.value,
        price: price.value,
        level: level.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (data.success) {
      const container = document.querySelector(".js-facts-container");
      container.insertAdjacentHTML("beforebegin", data.cardHtml);
    } else {
      fullErrorAnimationCard(data);
    }

    function fullErrorAnimationCard(data) {
      const className = document.querySelector(".name");
      className.value = data.name;
      const classImg = document.querySelector(".img");
      classImg.value = data.img;
      const classPrice = document.querySelector(".price");
      classPrice.value = data.price;
      const classLevel = document.querySelector(".level");
      classLevel.value = data.level;

      className.classList.add("animate");
      classImg.classList.add("animate");
      classPrice.classList.add("animate");
      classLevel.classList.add("animate");

      setTimeout(() => {
        className.value = "";
        classImg.value = "";
        classPrice.value = "";
        classLevel.value = "";
      }, 2800);

      setTimeout(() => {
        className.classList.remove("animate");
        classImg.classList.remove("animate");
        classPrice.classList.remove("animate");
        classLevel.classList.remove("animate");
      }, 3000);
    }
  });
}
