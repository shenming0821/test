var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
window.onload = function () {

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    render(context)
}

function render(cxt) {
    var hours = 12;
    var minutes = 34;
    var second = 56;

    renderDigit(0, 0, parseInt(hours / 10), cxt)
}

function renderDigit(x, y, num, cxt) {
    cxt.fillStyle = "rgb(0,102,153)";

    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] == 1) {
                cxt.beginPath();
                
                ctx.closePath();
            }

        }

    }
}