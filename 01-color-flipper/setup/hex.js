const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const hexValue = generateHexColor();
  document.body.style.backgroundColor = hexValue;
  color.textContent = hexValue;
});

function getRandomHexValue() {
  return Math.floor(Math.random() * hex.length);
}

function generateHexColor() {
  let hexValue = "#";
  for (let i = 0; i < 6; i++) {
    hexValue += hex[getRandomHexValue()];
  }
  return hexValue;
}
