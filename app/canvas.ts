export const canvas=  document.createElement('canvas');
export const ctx = canvas.getContext('2d');
document.querySelector('#app').appendChild(canvas);
let width = 900;
let height = 600;
canvas.width = width;
canvas.height = height;
canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;
canvas.style.border = '2px solid black';
canvas.style.display = 'block';
canvas.style.margin = 'auto';

canvas.style.backgroundImage = "url('https://img.freepik.com/premium-vector/retro-beach-pixel-design_210544-23.jpg?w=2000')"; 
 canvas.style.backgroundRepeat = "no-repeat"
canvas.style.backgroundSize = "cover";