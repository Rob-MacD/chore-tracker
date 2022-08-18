const date = new Date();
date.setDate(1);
const monthDays = document.querySelector(".days");
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.querySelector(".date h1").textContent = months[date.getMonth()];
document.querySelector(".date p").textContent = date.toDateString();

let days = "";
for (let i = 1; i <= lastDay; i++) {
  days += `<div>${i}</div>`;
}
monthDays.innerHTML = days;