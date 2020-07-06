function startup() {
  var el = document.getElementById("canvas");
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchmove", handleMove, false);
}

function handleStart(evt) {
  console.log("handleStart");
}

function handleEnd(evt) {
  console.log("handleEnd");
}

function handleMove(evt) {
  console.log("handleMove");
}

function handleCancel(evt) {
  console.log("handleCancel");
}

var currentDial = 0;
document.addEventListener("DOMContentLoaded", startup);