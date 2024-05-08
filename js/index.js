const showButton = document.querySelectorAll('[data-js="show"]');
const answer = document.querySelectorAll('[data-js="visible"]');

showButton.addEventListener("click", () => {
  if (answer.hasAttribute("hidden")) {
    answer.removeAttribute("hidden");
    showButton.textContent = "Hide Answer";
  } else {
    answer.setAttribute("hidden", "");
    showButton.textContent = "Show Answer";
  }
});
