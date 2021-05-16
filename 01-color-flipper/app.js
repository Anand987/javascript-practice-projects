const colors = ["green", "red", "dodgerblue", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const rand = getRandomNumber();

  document.body.style.backgroundColor = colors[rand];
  color.textContent = colors[rand];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
