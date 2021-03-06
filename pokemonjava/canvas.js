class Quadrado{
novo = false;
   constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
   }
   
   draw() {
     ctx.beginPath();
    
	ctx.fillStyle = this.color;
    ctx.rect(this.x,this.y,50,50);

    ctx.fill();
    ctx.stroke();
   }

   update() {
		this.novo=false;
      if ((this.y + this.size) >= height) {
         //this.velY = -(this.velY);
		 //this.y=0;
		 //this.draw();
		 //quadrados.push(this);
		 this.novo = true;
      }

      if ((this.y - this.size) <= 0) {
         this.velY = -(this.velY);
      }

      this.y += this.velY;
   }

   collisionDetect(Quadrados) {
      for (var quadrado of Quadrados) {
         if (!(this === quadrado)) {
            const dx = this.x - quadrado.x;
            const dy = this.y - quadrado.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + quadrado.size) {
              quadrado= this.color = randomRGB();
            }
         }
      }
   }

}
 