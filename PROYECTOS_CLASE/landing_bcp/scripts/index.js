let time = document.getElementById("time");
let COUNT = 20;
time.innerText = COUNT;

setInterval(function() {
  COUNT = COUNT - 1;
  if (COUNT > 0) {
    time.innerText = COUNT;
  } else {
    COUNT = 20;
    time.innerText = COUNT;
  }
}, 1000);
