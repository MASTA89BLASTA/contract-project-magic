const formRegister = document.querySelector(".form-main");
// const radioButtons = document.getElementsByName(".action");
// const selectedOption = "";
// radioButtons.forEach((radioButton) => {
//   if (radioButton.checked) {
//     selectedOption = radioButton.value;
//     // console.log(selectedOption);
//   }
// });
if (formRegister) {
  formRegister.addEventListener("submit", async (event) => {
    event.preventDefault();

    const radioButtons = document.getElementsByName("action");
    let selectedOption = "";

    Array.from(radioButtons).forEach((radioButton) => {
      if (radioButton.checked) {
        selectedOption = radioButton.value;
      }
    });

    console.log(selectedOption);

    const { email, pass, repass } = event.target;

    // event.target = то, что вызвало событие - то есть наша форма

    // 2 шаг отправить запрос на сервер
    const response = await fetch("/", {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
        pass: pass.value,
        repass: repass.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(radioButtons);

    // window.location.assign("/login");

    const data = await response.json();

    // понять, куда вставлять
    const container = document.querySelector(".js-facts-container");
    // что вставлять
    container.insertAdjacentHTML("beforebegin", data.cardHtml);
  });
}
