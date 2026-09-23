function twoSum(numbers, target) {
  const seen = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    seen.set(numbers[i], i);
  }

  return null;
}

const numbers = [2, 7, 11, 15];
const targetInput = document.getElementById("target");
const numberInput = document.getElementById("number");
const popButton = document.getElementById("delete");
const error = document.getElementById("error");

function updateDisplay() {
  document.getElementById("array").textContent = `[${numbers.join(", ")}]`;
  popButton.disabled = numbers.length === 0;

  const target = Number(targetInput.value);
  if (targetInput.value.trim() === "" || !Number.isSafeInteger(target)) {
    document.getElementById("sum").textContent = "";
    document.getElementById("result").textContent = "Enter a valid whole-number target.";
    return;
  }

  const result = twoSum(numbers, target);

  if (result !== null) {
    document.getElementById("sum").textContent =
      `${numbers[result[0]]} + ${numbers[result[1]]} = ${target}`;
    document.getElementById("result").textContent = `Result: [${result.join(", ")}]`;
  } else {
    document.getElementById("sum").textContent = "";
    document.getElementById("result").textContent = "No pair found.";
  }
}

document.getElementById("add-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const number = Number(numberInput.value);

  if (numberInput.value.trim() === "" || !Number.isSafeInteger(number)) {
    error.textContent = "Enter a whole number within JavaScript's safe integer range.";
    return;
  }

  numbers.push(number);
  error.textContent = "";
  numberInput.value = "";
  numberInput.focus();
  updateDisplay();
});

popButton.addEventListener("click", function () {
  numbers.pop();
  error.textContent = "";
  updateDisplay();
});

targetInput.addEventListener("input", updateDisplay);

updateDisplay();
