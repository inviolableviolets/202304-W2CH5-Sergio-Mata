let userArray = [];
const arrayField = document.querySelector(".array-input");
const userAnswer = document.querySelector(".user-answer");
const instructionsField = document.querySelector(".instructions");
const methodSelectorSection = document.querySelector(".methods");
const methodSelector = document.querySelector("select");
const resultSection = document.querySelector(".result");
const tryAgainButton = document.querySelector(".try-again");

const handleInputSubmit = (event) => {
  event.preventDefault();
  userArray = userAnswer.value.split(",");
  arrayField.reset();
  arrayField.classList.add("--hidden");
  methodSelectorSection.classList.remove("--hidden");
  instructionsField.textContent =
    "Ahora, elige uno de los métodos para ver el resultado que saldría al aplicárselo a tu array.";
  return userArray;
};

const handleSelectorChange = (event) => {
  methodSelectorSection.classList.add("--hidden");
  resultSection.classList.remove("--hidden");
  let result;
  const mappedArray = [...userArray];

  if (event.target.value === "length") {
    result = mappedArray.length;
  }

  if (event.target.value === "pop") {
    result = mappedArray.pop();
  }

  instructionsField.textContent = `Teniendo en cuenta su array [${userArray}], su array pasaría a ser[${mappedArray}] y el resultado ${result}.`;
};

arrayField.addEventListener("submit", handleInputSubmit);

methodSelector.addEventListener("change", handleSelectorChange);

tryAgainButton.addEventListener("click", () => location.reload());
