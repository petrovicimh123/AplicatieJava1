let btn = document.getElementById("btn");
let output = document.getElementById("output");
let randoms = ["yes", "no"];

btn.onclick = function () {
  var Raspunsuri = randoms[Math.floor(Math.random() * randoms.length)];
  output.innerHTML = Raspunsuri;
};

function openSlideMenu() {
  document.getElementById("menu").style.width = "250px";
  document.getElementById("content").style.marginLeft = "250px";
}

function closeSlideMenu() {
  document.getElementById("menu").style.width = "0px";
  document.getElementById("content").style.marginLeft = "0px";
}
