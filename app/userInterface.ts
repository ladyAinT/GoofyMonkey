import {canvas} from './canvas';
import {animatedMonkey} from './spriteAnimation';

canvas.addEventListener(
  'mousemove' ,
  function (ev) {
    
  animatedMonkey.x = ev.offsetX;
  
  }
)