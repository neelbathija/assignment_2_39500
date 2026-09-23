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
const target = 9;
const result = twoSum(numbers, target);

document.getElementById("array").textContent = `[${numbers.join(", ")}]`;
document.getElementById("target").textContent = `Target: ${target}`;

if (result !== null) {
  document.getElementById("sum").textContent =
    `${numbers[result[0]]} + ${numbers[result[1]]} = ${target}`;
  document.getElementById("result").textContent = `Result: [${result.join(", ")}]`;
} else {
  document.getElementById("result").textContent = "No pair found.";
}
