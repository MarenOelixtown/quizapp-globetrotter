const form = document.querySelector('[data-js="card-form"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  console.log(formElements.question);
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data.question);

  const newQuestionCard = document.createElement("article");
  newQuestionCard.classList.add("question-card");
  newQuestionCard.innerHTML = `
    <button class="bookmark-button" type="button" data-js="toggle-bookmark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="bookmark-card-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </button>

          <h2>${data.question}</h2>
          <button class="answer-button" type="button" data-js="show">
            Show Answer
          </button>
          <h3 data-js="visible" hidden>${data.answer}</h3>
          <ul class="categories">
            <li>#<span>${data.tag}</span></li>            
          </ul>`;

  cardContainer.append(newQuestionCard);
  event.target.reset();
  formElements.question.focus();
});

const formQuestionInput = document.querySelector('[data-js="question-input"]');
const formAnswerInput = document.querySelector('[data-js="answer-input"]');
const maxLengthQuestion = formQuestionInput.getAttribute("maxlength");
const maxLengthAnswer = formAnswerInput.getAttribute("maxlength");
const amountLeftQuestion = document.querySelector(
  '[data-js="questionAmountLeft"]'
);
const amountLeftAnswer = document.querySelector('[data-js="answerAmountLeft"]');

const updateAmountLeftQuestion = (value) => {
  amountLeftQuestion.textContent = value;
};
updateAmountLeftQuestion(maxLengthQuestion);

formQuestionInput.addEventListener("input", () => {
  updateAmountLeftQuestion(maxLengthQuestion - formQuestionInput.value.length);
});

const updateAmountLeftAnswer = (value) => {
  amountLeftAnswer.textContent = value;
};
updateAmountLeftAnswer(maxLengthAnswer);

formAnswerInput.addEventListener("input", () => {
  updateAmountLeftAnswer(maxLengthAnswer - formAnswerInput.value.length);
});
