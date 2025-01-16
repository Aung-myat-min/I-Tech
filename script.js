document.addEventListener("DOMContentLoaded", () => {
  const contactUsBtns = document.getElementsByClassName("contact-us");

  Array.from(contactUsBtns).forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = "./contact-us.html";
    });
  });
});
