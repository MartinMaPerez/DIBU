var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,

};

var dosTeclas = {

};


console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mousedown", clickDown);
document.addEventListener("mousemove", dibujarMouseMove);
document.addEventListener("mouseup", clickUp);
var d = document.getElementById("area");
var papel = d.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("black", 149, 149, 151, 151 , papel);

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 5;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
};

function dibujarTeclado (evento)
{
    console.log(evento);
    var colorcito = "green"
    var movimiento = 3;

    switch (evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x ,y + movimiento, papel);
            y = y + movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;

        default:
            break;
    };

    dosTeclas [evento.keyCode] = evento.type == "keyup";
    console.log(dosTeclas);

    if (dosTeclas == teclas.UP & dosTeclas == teclas.LEFT)
    {
        console.log("Se precionaron dos teclas");
    };

};

var click;
var clientX;
var clientY;

function clickDown(evento)
{
    click = true;
    clientX = evento.clientX;
    clientY = evento.clientY;

};

function dibujarMouseMove(evento)
{
    colorcito = "blue";
    console.log(evento);

    if (click) {
        var screenX = evento.clientX;
        var screenY = evento.clientY;

        dibujarLinea(colorcito, clientX, clientY, screenX, screenY, papel);

        clientX= screenX;
        clientY = screenY;
    };
};

function clickUp(evento)
{
    click = false;
};
