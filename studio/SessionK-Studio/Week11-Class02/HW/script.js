/*-------Laptop JS-----------*/

document.getElementById("fading").onclick = function () {
  document.getElementById("dream").style.color = "rgb(228, 1, 1)";
};

document.getElementById("dream").onclick = function () {
  document.getElementById("ready").style.color = "rgb(228, 1, 1)";
};

document.getElementById("ready").onclick = function () {
  document.getElementById("for").style.color = "rgb(228, 1, 1)";
};

document.getElementById("for").onclick = function () {
  document.getElementById("nerve").style.color = "rgb(228, 1, 1)";
};

document.getElementById("nerve").onclick = function () {
  document.getElementById("fading").style.color = "rgb(228, 1, 1)";
  document.getElementById("dream").style.color = "black";
  document.getElementById("ready").style.color = "black";
  document.getElementById("for").style.color = "black";
  document.getElementById("nerve").style.color = "black";
};
