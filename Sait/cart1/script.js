function circleArea(radius) {
    var area = Math.PI * (radius * radius);
    return area;
}

var radius = prompt("Введите радиус круга:");
var result = circleArea(radius);
document.write("Площадь круга с радиусом " + radius + " равна " + result + ".");

function names() {
    let sI = "Женя";
    let s2 = "Гродно";

    console.log(sI.length);

    let s3 = sI + ", " + s2;
    console.log(s3);

    let s4 = s2.toUpperCase();
    console.log(s4);
}
window.onload = names;
let fullUrl = window.location.href;

// Выводим его в консоль браузера
console.log(fullUrl);