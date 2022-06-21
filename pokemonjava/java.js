const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

const quadrados = [];
xinicial = 0;
while (quadrados.length < 25) {
   const size = random(10,20);
   const quadrado = new Quadrado(
   
      random(xinicial + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size
   );
  xinicial = xinicial + 0;
  quadrados.push(quadrado);
}
   
function loop() {
   ctx.fillStyle = 'rgba(255, 255, 255, 0)';
   ctx.clearRect(0, 0,  width, height);
   ctx.fillRect(0, 0,  width, height);
   criaquadrado= false;
quadrado2  = [];
  

   for (const quadrado of quadrados) {
    quadrado.draw();
	quadrado.update();
    if(quadrado.novo==true)
	{
		//quadradonovo = quadrado;
		//quadradonovo.y = 0;
		//quadrado2.push(quadradonovo);
	}
    quadrado.collisionDetect(quadrados);
   }
// quadrados.push(quadrado2);
   requestAnimationFrame(loop);
}

loop();