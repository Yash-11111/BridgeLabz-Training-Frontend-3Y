// q7_mouse_logger.js
document.addEventListener('DOMContentLoaded', ()=>{
  const box = document.getElementById('box');
  const coord = document.getElementById('coord');
  box.addEventListener('mousemove', e => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    coord.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY} | inside: x:${x.toFixed(0)} y:${y.toFixed(0)}`;
  });
  box.addEventListener('dblclick', e => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const dot = document.createElement('div');
    dot.style.position='absolute'; dot.style.width='8px'; dot.style.height='8px'; dot.style.background='red';
    dot.style.left = (x-4) + 'px'; dot.style.top = (y-4) + 'px';
    box.appendChild(dot);
  });
});