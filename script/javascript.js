var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth; //make <canvas> big as window width
canvas.height = window.innerHeight; //make <canvas> big as window Height

var c = canvas.getContext('2d'); //c - context (sometimes called "ctx") .getContext('2d') - drowing some 2d objects

c.fillStyle = 'rgba(255, 0, 0, 0.6)'; //Style color
c.fillRect(20, 20, 200, 100); //Drawing rectangle x,y, Width, Height
c.fillStyle = 'rgba(0, 255, 0, 0.6)';
c.fillRect(300, 20, 100, 100);
c.fillStyle = 'rgba(0, 0, 255, 0.6)';
c.fillRect(330, 200, 210, 210);

//Line
c.beginPath(); //begin drawng some shape
c.moveTo(150, 500); //fron point 150x 500y
c.lineTo(300, 200); //to 300x 200y...
c.lineTo(600, 500);
c.lineTo(150, 500);
c.strokeStyle = "#222"; //style color
c.stroke(); // DRAWING


//Arc / Circle

//Random Color

for (i = 0; i < 100; i++) {
    var redColor = Math.floor(Math.random() * 255); //random "red" color from 0-255 floored
    var greenColor = Math.floor(Math.random() * 255);
    var blueColor = Math.floor(Math.random() * 255);
    //Random location
    var x = Math.random() * window.innerWidth; //random x include window width
    var y = Math.random() * window.innerHeight; //random x include window height


    c.beginPath(); //begin to draw
    c.arc(x, y, 30, 0, Math.PI * 2, false); // X, Y, radius, begin draw engle, end draw engle,
    c.strokeStyle = 'rgba(' + redColor + ', ' + greenColor + ', ' + blueColor + ', 1)'; //Stroke style random color
    c.stroke(); //Drawing
}

//Random color Animation

function animate() {
    c.clearRect(0, 0, innerWidth, innerHeight) //clear fron point 0, 0 to window Width and Height.

    for (i = 0; i < 100; i++) {
        var redColor = Math.floor(Math.random() * 255); //random "red" color from 0-255 floored
        var greenColor = Math.floor(Math.random() * 255);
        var blueColor = Math.floor(Math.random() * 255);
        //Random location
        var x = Math.random() * window.innerWidth; //random x include window width
        var y = Math.random() * window.innerHeight; //random x include window height


        c.beginPath(); //begin to draw
        c.arc(x, y, 30, 0, Math.PI * 2, false); // X, Y, radius, begin draw engle, end draw engle,
        c.strokeStyle = 'rgba(' + redColor + ', ' + greenColor + ', ' + blueColor + ', 1)'; //Stroke style random color
        c.stroke(); //Drawing
    }


};

setInterval(animate, 3000);
