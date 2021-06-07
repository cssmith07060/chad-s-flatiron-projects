const card1 = querySelecttor('bbq.jpeg');
// motion of pic
const center = {
    x: parseFloat(getComputedStyle(bbq.jpeg).left), 
    y: parseFloat(getComputedStyle(bbq.jpeg).top),
} 
let new_x = 0.0;
let new_y = 0.0;
let animated_value = 0.0;
let animation_id = null;

 function startAnimation () {
    new_y = center.y - animated_value;
    new_x = center.x + (60.0 - Math.sin(motion_sway - animated_value)) + natural_sway;
    bbq.jpeg.style.top = `${new_y}`;
    bbq.jpeg.style.left = `${new_x}`;

    bbq.jpeg.style.opacity = new_opacity;

    animated_value++;
    if (bbq.jpeg.style.opacity < 0) {
        return;
    } else {
       animation_id = requestAnimationFrame(startAnimation)
    }

}
window.addEventListener(`click`, () => {
    startAnimation();
});

window.addEventListener(`keyup`, event => {
    if (event.key === 'a') cancelAnimationFrame(animation_id)
});

