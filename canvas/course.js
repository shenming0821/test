window.onload = function (){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = 1024;
    canvas.height = 768;

    // 使用context绘制

    context.beginPath();
    context.moveTo(100,100);
    context.lineTo(700,700);
    context.lineTo(100,700);
    context.lineTo(100,100);
    context.fillStyle = 'green';
    context.fill();
    context.closePath();

    context.lineWidth = 5;
    context.strokeStyle = "#f66";
    context.stroke();
    

    context.beginPath();
    context.moveTo(200,100);
    context.lineTo(700,600);
    context.strokeStyle = 'black';
    context.stroke();
    context.closePath();

    context.beginPath();
    // context.lineWidth = 5;
    context.arc(300,300,200,0,1.5*Math.PI);
    context.strokeStyle = "#058";
    context.stroke();
    context.closePath();
}