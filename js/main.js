const elDate = document.querySelector("[data-birthday]");
const elToDate = document.querySelector("[data-todate]");
const elInputDate = document.querySelector("[data-input]");
const elInputNow = document.querySelector("[data-input-now]");

elInputNow.addEventListener("change", () => {
  setInterval(() => {
    startTimer(new Date(elInputNow.value));
  }, 1000);
});

elInputDate.addEventListener("change", () => {
  setInterval(() => {
    yourAge(new Date(elInputDate.value));
  }, 1000);
});

function startTimer(date) {
  const now = new Date();
  let diff = Math.trunc((date.getTime() - now.getTime()) / 1000);
  const second = diff % 60;
  diff = Math.trunc(diff / 60);
  const minute = diff % 60;
  diff = Math.trunc(diff / 60);
  const hour = diff % 24;
  diff = Math.trunc(diff / 24);

  elToDate.textContent = `${diff} day, ${hour} hour, ${minute} minute, ${second} second.`;
}

function yourAge(date) {
  const now = new Date();

  let diff = Math.trunc((now.getTime() - date.getTime()) / 1000);
  const second = diff % 60;
  diff = Math.trunc(diff / 60);
  const minute = diff % 60;
  diff = Math.trunc(diff / 60);
  const hour = diff % 24;
  diff = Math.trunc(diff / 24);
  const day = diff % 365;
  diff = Math.trunc(diff / 365);

  elDate.textContent = `${diff} year, ${day} day, ${hour} hour, ${minute} minute, ${second} second.`;
}
