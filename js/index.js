/* const showButton = document.querySelector('[data-js="show"]');
const answer = document.querySelector('[data-js="visible"]');

showButton.addEventListener("click", () => {
  if (answer.hasAttribute("hidden")) {
    answer.removeAttribute("hidden");
    showButton.textContent = "Hide Answer";
  } else {
    answer.setAttribute("hidden", "");
    showButton.textContent = "Show Answer";
  }
});*/

const showButtons = document.querySelectorAll('[data-js="show"]');
const answers = document.querySelectorAll('[data-js="visible"]');

showButtons.forEach((showButton, index) => {
  const answer = answers[index]; // Das entsprechende Antwort-Element für jeden Button

  showButton.addEventListener("click", () => {
    if (answer.hasAttribute("hidden")) {
      answer.removeAttribute("hidden");
      showButton.textContent = "Hide Answer";
    } else {
      answer.setAttribute("hidden", "");
      showButton.textContent = "Show Answer";
    }
  });
});
