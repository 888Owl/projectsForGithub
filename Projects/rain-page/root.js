var rain_cloud = document.getElementById("rain_div");
function randRange(minNum, maxNum) {
  return Math.floor(Math.random() * maxNum) + minNum;
}
function raining(num) {
  let rain_switch = false;
  for (let i = 1; i < num; i++) {
    let rain_drop = document.createElement("div");
    rain_drop.setAttribute("class", "drop");
    rain_drop.setAttribute("id", `drop${i}`);
    rain_drop.style.position = "relative";
    let x = randRange(1, 100);
    let y = randRange(1, 100);
    let height = randRange(1, 12);
    let width = randRange(1, 3);
    rain_drop.style.opacity = 0;
    rain_drop.style.left = x + "vw";
    rain_drop.style.top = y + "vh";
    rain_drop.style.height = height + "px";
    rain_drop.style.width = width + "px";
    rain_drop.style.animationDelay = i * 50 + "ms";
    rain_cloud.appendChild(rain_drop);
  }
}
raining(75);