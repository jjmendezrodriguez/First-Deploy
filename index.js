let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count++;
  countEl.innerText = count;
  console.log(count);
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  console.log(count);
}

function reset() {
  count = 0;
  document.getElementById("count-el").innerText = count;
}
