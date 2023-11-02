const formRegister = document.querySelector(".form-reg");

if (formRegister) {
  formRegister.addEventListener("submit", async (event) => {
    event.preventDefault();

    const {
      login, email, password, repass,
    } = event.target;

    const radioButtons = document.getElementsByName("action");
    let valueRadioButtons = "";

    Array.from(radioButtons).forEach((item) => {
      if (item.checked) {
        valueRadioButtons = item.value;
      }
    });

    const radioCity = document.getElementsByName("singleSelect");
    let city = "";

    Array.from(radioCity).forEach((item) => {
      if (item.checked) {
        city = item.value;
      }
    });

    if (valueRadioButtons === "signin") {
      const responseLogin = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({
          login: login.value,
          email: email.value,
          password: password.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await responseLogin.json();
      // Переход на главную страницу
      if (data.success) {
        window.location.assign("/main");
      } else {
        fullErrorAnimation(data);
      }
    }
    if (valueRadioButtons === "signup") {
      const responseRegister = await fetch("/register", {
        method: "POST",
        body: JSON.stringify({
          login: login.value,
          email: email.value,
          password: password.value,
          repass: repass.value,
          city,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await responseRegister.json();
      if (data.success) {
        const container = document.querySelector(".js-facts-container");
        container.insertAdjacentHTML("beforebegin", data.cardHtml);

        classLogin.value = "";
        classEmail.value = "";
        classPassword.value = "";
        classRepass.value = "";
      } else {
        fullErrorAnimation(data);
      }
      // понять, куда вставлять
      // что вставлять
    }

    function fullErrorAnimation(data) {
      const classLogin = document.querySelector(".login");
      classLogin.value = data.login;
      const classEmail = document.querySelector(".email");
      classEmail.value = data.email;
      const classPassword = document.querySelector(".password");
      classPassword.value = data.password;
      const classRepass = document.querySelector(".repass");
      classRepass.value = data.repass;

      classLogin.classList.add("animate");
      classEmail.classList.add("animate");
      classPassword.classList.add("animate");
      classRepass.classList.add("animate");

      setTimeout(() => {
        classLogin.value = "";
        classEmail.value = "";
        classPassword.value = "";
        classRepass.value = "";
      }, 2800);

      setTimeout(() => {
        classLogin.classList.remove("animate");
        classEmail.classList.remove("animate");
        classPassword.classList.remove("animate");
        classRepass.classList.remove("animate");
      }, 3000);
    }
  });
}
