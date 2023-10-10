// 29

function handleFormSubmit() {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");

    alert(`Имя: ${name}\nEmail: ${email}`);
  });
}

document.addEventListener("DOMContentLoaded", handleFormSubmit);
