import {canvas, ctx} from './canvas';
import {addAnimation} from './animation';
export let bananaManager = {
  boxes: [
    { x: 250, y:70 },
    { x:200, y: 20 },
    { x:100, y:30 },
    { x: 77, y: 40 },
    { x: 50, y: 50 }
  ],
  addBox(x, y) {
    this.boxes.push({ x, y });
  },
  draw() {
    this.boxes.forEach((box) => {
      ctx.fillStyle = "yellow";
      ctx.fillRect(box.x, box.y, 10, 10);
    });
  },
  update () {
    this.boxes.forEach((box) => {
      box.x += 1;
      box.y += -2;
      if (box.x > canvas.width) {
        box.x = 0;
      }
      if (box.y > canvas.height) {
        box.y = 0;
      }
    });
  }
};

canvas.addEventListener("click", (event) => {
  bananaManager.addBox(event.offsetX, event.offsetY);
});

addAnimation(bananaManager)