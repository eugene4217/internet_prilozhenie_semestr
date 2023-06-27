const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
setTimeout(() => {
    const newWindow = window.open("", "newWindow", "width=400,height=300");
    newWindow.document.write(`<p>Screen width: ${screenWidth}</p>`);
    newWindow.document.write(`<p>Screen height: ${screenHeight}</p>`);
}, 3000);

setTimeout(function() {
  alert("Вы пришли на эту страницу со страницы: " + document.referrer);
}, 5000);

var parent = document.getElementById("parent-element"); // получаем родительский элемент
var node2 = document.getElementById("node2"); // получаем элемент с индексом 2
var node3 = document.getElementById("node3"); // получаем элемент с индексом 3
parent.insertBefore(node3, node2); // вставляем узел 3 перед узлом 2

const image = document.getElementById("image");

image.addEventListener("mouseover", function() {
  this.style.border = "3px solid green";
});

image.addEventListener("mouseout", function() {
  this.style.border = "0px solid green";
});

