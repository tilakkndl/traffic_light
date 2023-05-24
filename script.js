const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const trafficLight = document.getElementsByClassName("traffic-light");
const traffic = document.getElementById("traffic");
const car = document.getElementById("car");
let m = 0;
let y;

function start() {
  // location.reload();
  y = setInterval(runSimulator, 100);
  function runSimulator() {
    if (m == 1000) {
      clearInterval(y);
      m = 0;
    } else {
      m += 10;
      car.style.marginLeft = m + "px";
    }
  }
}

function stop() {
  clearInterval(y);
}

function redLightAction() {
  stop();

  traffic.src = "traffic_1.jpg";
}

function yellowLightAction() {
  traffic.src = "traffic_2.jpg";
  stop();
}
function greenLightAction() {
  traffic.src = "traffic_3.jpg";
  start();
}

start();

setTimeout(redLightAction, 5000);
setTimeout(yellowLightAction, 8000);
setTimeout(greenLightAction, 10000);
