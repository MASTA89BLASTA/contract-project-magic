const list = document.querySelector(".js-card-container");
console.log(list)
if (list) {
  list.addEventListener("click", async (e) => {
    e.preventDefault();

    // вешаем слушатель событий на весь контейнер, но внутри проверяем:
    // на чем кликнули? если по кнопке "Удалить" - только тогда делай удаление
    if (e.target.classList.contains("btn-delete")) {
      const deleteBtn = e.target;
      console.log(deleteBtn, '777777777777777')
      // находим контейнер родителя
      const parentContainer = deleteBtn.closest(".cards-wrapper");
      console.log(parentContainer, '--------------------');
      // из дата-атрибутов забрали id факта, который будет удалятся
      const { id } = parentContainer.dataset;
      console.log(id, '111111111111');
      // 1. отправить запрос на сервер, чтобы удалилось из бд
      try {
        const response = await fetch(`/card/${id}`, {
          method: "DELETE",
        });

        // если успешный статус 200-299
        if (response.ok) {
          // 2. удалить карточку из дом-дерева
          parentContainer.remove();
        } else {
          // если плохой статус, тогда парсим сообщение от сервера
          const data = await response.json();
          // и выводим ошибку
          alert(data.error);
        }
      } catch (error) {}
    }
  });
}
