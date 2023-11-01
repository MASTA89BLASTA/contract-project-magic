const $ = require("jquery");

const formRegister = document.querySelector(".form-main");

/* Dropdown Menu */
$(".dropdown").click(function () {
  $(this).attr("tabindex", 1).focus();
  $(this).toggleClass("active");
  $(this).find(".dropdown-menu").slideToggle(300);
});
$(".dropdown").focusout(function () {
  $(this).removeClass("active");
  $(this).find(".dropdown-menu").slideUp(300);
});
$(".dropdown .dropdown-menu li").click(function () {
  $(this).parents(".dropdown").find("span").text($(this).text());
  $(this).parents(".dropdown").find("input").attr("value", $(this).attr("id"));
});
/* End Dropdown Menu */

$(".dropdown-menu li").click(function () {
  const input = `<strong>${$(this).parents(".dropdown").find("input").val()}</strong>`;
  const msg = "<span class=\"msg\">Hidden input value: ";
  $(".msg").html(`${msg + input}</span>`);
});

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

    if (selectedOption === "signin") {
      console.log(selectedOption);
    }
    if (selectedOption === "signup") {
      console.log(selectedOption);
    }
    if (selectedOption === "reset") {
      console.log(selectedOption);
    }

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
