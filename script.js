const date = new Date();
const monthDays = document.querySelector(".days");
const lastDay = new Date(date.getFullYear(), date.getMonth(), 0);
console.log(lastDay);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.querySelector(".date h1").textContent = months[date.getMonth()];
document.querySelector(".date p").textContent = date.toDateString();

let days = "";
for (let i = 0; i <= 31; i++) {
  days += `<div>${i}</div>`;
}
monthDays.innerHTML = days;
