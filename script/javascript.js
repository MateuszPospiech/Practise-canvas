var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); //c - context (sometimes called "ctx") .getContext('2d') - drowing some 2d objects

c.fillRect(20, 20, 200, 100); //Drawing rectangle x,y, Width, Height
c.fillRect(300, 20, 100, 100);
c.fillRect(330, 200, 210, 210);
