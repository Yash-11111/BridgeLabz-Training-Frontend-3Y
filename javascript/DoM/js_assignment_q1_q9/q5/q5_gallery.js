// q5_gallery.js
document.addEventListener('DOMContentLoaded', ()=>{
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const grid = document.getElementById('grid');

  grid.addEventListener('click', e => {
    const img = e.target.closest('img');
    if (!img) return;
    modalImg.src = img.dataset.large || img.src;
    modal.style.display = 'flex';
  });

  // clicking outside modal content closes it
  modal.addEventListener('click', ()=> modal.style.display='none');
  // prevent inner click closing
  document.getElementById('modalContent').addEventListener('click', e => e.stopPropagation());
});