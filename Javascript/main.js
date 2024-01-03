const output = document.querySelector("#output");
const l4Btn = document.querySelector("#btn1");
const l8Btn = document.querySelector("#btn2");
const l10Btn = document.querySelector("#btn3");
const copyBtn = document.querySelector("#copyBtn");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = uppercase.toLocaleLowerCase();
const number = "1234567890";
const special = "!@#$%&*";

const icon2 = document.querySelector(".icon-2");

l4Btn.addEventListener("click", function () {
  const upper = uppercase[Math.floor(Math.random() * uppercase.length)];
  const lower = lowercase[Math.floor(Math.random() * lowercase.length)];
  const num = number[Math.floor(Math.random() * number.length)];
  const specialCha = special[Math.floor(Math.random() * special.length)];
  let password = upper + lower + specialCha + num;
  output.value = password;
});

const allItem = uppercase + lowercase + number + special;
const length8 = 8;

l8Btn.addEventListener("click", function () {
  const upper = uppercase[Math.floor(Math.random() * uppercase.length)];
  const lower = lowercase[Math.floor(Math.random() * lowercase.length)];
  const num = number[Math.floor(Math.random() * number.length)];
  const specialCha = special[Math.floor(Math.random() * special.length)];
  let password = upper + lower + specialCha + num;
  while (password.length <= length8) {
    password += allItem[Math.floor(Math.random() * allItem.length)];
  }
  output.value = password;
});

const length10 = 10;

l10Btn.addEventListener("click", function () {
  const upper = uppercase[Math.floor(Math.random() * uppercase.length)];
  const lower = lowercase[Math.floor(Math.random() * lowercase.length)];
  const num = number[Math.floor(Math.random() * number.length)];
  const specialCha = special[Math.floor(Math.random() * special.length)];
  let password = upper + lower + specialCha + num;
  while (password.length <= length10) {
    password += allItem[Math.floor(Math.random() * allItem.length)];
  }
  output.value = password;
});

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(output.value);
  output.value = "copied";
  icon2.style.display = "block";
  copyBtn.style.display = "none";
});
