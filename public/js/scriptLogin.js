const loginForm = document.querySelector(".form-login");
console.log(123);

if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    // event.target = то, что вызвало событие - то есть наша форма

    // 2 шаг отправить запрос на сервер
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const body = await response.json();

    if (body.success) {
      window.location.assign("/entries");
    } else {
      const classEmail = document.querySelector(".login-email");
      classEmail.value = body.email;
      const classPassword = document.querySelector(".login-password");
      classPassword.value = body.password;

      switch (body.value) {
        case "NoEmail":
          console.log(1);
          classEmail.classList.add("animate");
          break;

        case "NoPassword":
          console.log(2);
          classPassword.classList.add("animate");
          break;

        default:
          console.log(3);
          classEmail.classList.add("animate");
          classPassword.classList.add("animate");
          break;
      }

      setTimeout(() => {
        classEmail.value = "";
        classPassword.value = "";
      }, 2800);

      setTimeout(() => {
        classEmail.classList.remove("animate");
        classPassword.classList.remove("animate");
      }, 3000);
    }
  });
}
