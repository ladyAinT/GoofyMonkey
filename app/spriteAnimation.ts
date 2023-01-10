import {addAnimation, startAnimation} from './animation';
import {monkey} from './monkey';
import {canvas} from './canvas';
import {bananaManager} from './banana';

export let animatedMonkey = {
    x : 400,
    y: 400,
    frame : 0,
    counter : 0,
    frameRate : 1000/8,
     w : 150,
     h : 150,
    draw () {
      monkey.draw(animatedMonkey.x,animatedMonkey.y,animatedMonkey.frame, animatedMonkey.w,animatedMonkey.h);
    }
}
    
  
setInterval(
  function() {
   animatedMonkey.frame += 1
    bananaManager.addBox(animatedMonkey.x+50 , animatedMonkey. y)
  },
  200)


addAnimation(animatedMonkey);

startAnimation();

