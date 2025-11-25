// q8_custom_dropdown.js
document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('ddBtn');
  const list = document.getElementById('ddList');
  btn.addEventListener('click', e=>{ list.style.display = list.style.display==='block'?'none':'block'; });
  // capturing phase to close when clicking outside
  document.addEventListener('click', (e)=>{
    if (!e.composedPath().includes(list) && e.target !== btn) list.style.display='none';
  }, true); // use capture
  list.addEventListener('click', e=>{
    const opt = e.target.closest('.opt');
    if (!opt) return;
    btn.textContent = opt.textContent;
    list.style.display='none';
  });
});