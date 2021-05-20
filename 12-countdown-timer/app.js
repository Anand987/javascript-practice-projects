const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2021, 4, 22, 11, 30, 0);
// console.log(futureDate);

// DATE
const year = futureDate.getFullYear();
const date = futureDate.getDate();
let weekday = futureDate.getDay();
let month = futureDate.getMonth();
month = months[month];
weekday = weekdays[weekday];

// TIME
const hrs = futureDate.getHours();
const mins = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hrs}:${mins}am`;

// time in ms
const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  // console.log(t);

  // 1s = 1000ms
  // 1min = 60s
  // 1hr = 60min
  // 1day = 24hrs

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  // calculate
  let days = t / oneDay;
  days = Math.floor(days);

  let hours = (t % oneDay) / oneHour;
  hours = Math.floor(hours);

  let minutes = (t % oneHour) / oneMin;
  minutes = Math.floor(minutes);

  let seconds = (t % oneMin) / 1000;
  seconds = Math.floor(seconds);

  // console.log(days, hours, minutes, seconds);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }

  items.forEach(function (item, idx) {
    item.innerHTML = format(values[idx]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML =
      '<h4 class="expired">sorry, this giveaway has expired!!</h4>';
  }
}

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
