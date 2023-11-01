const formRegister = document.querySelector(".form-main");
const radioButtons = document.getElementsByName(".action");
const selectedOption = "";
radioButtons.forEach((radioButton) => {
  console.log(radioButton);
});
if (formRegister) {
  formRegister.addEventListener("submit", async (event) => {
    event.preventDefault();

    // const { login, email, password } = event.target;
    // event.target = то, что вызвало событие - то есть наша форма

    // 2 шаг отправить запрос на сервер
    // const response = await fetch("/register", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     login: login.value,
    //     email: email.value,
    //     password: password.value,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // window.location.assign("/login");

    // const data = await response.json();

    // // понять, куда вставлять
    // const container = document.querySelector(".js-facts-container");
    // // что вставлять
    // container.insertAdjacentHTML("beforebegin", data.cardHtml);
  });
}
