const date = new Date();
const monthDays = document.querySelector(".days");
const lastDay = new Date(date.getFullYear(), date.getMonth(), 0);
console.log(lastDay + "\n", lastDay.getDay());
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.querySelector(".date h1").textContent = months[date.getMonth()];
document.querySelector(".date p").textContent = date.toDateString();

let days = "";
for (let i = lastDay.getDay(); i >= 0; i--) {
  days += `<div class="prev">${31 - i}</div>`;
}

for (let i = 1; i <= 31; i++) {
  days += `<div>${i}</div>`;
}

for (let i = 1; i <= 6; i++) {
  days += `<div>${i}</div>`;
}

monthDays.innerHTML = days;
