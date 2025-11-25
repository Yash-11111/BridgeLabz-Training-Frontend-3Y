// q4_theme.js
document.addEventListener('DOMContentLoaded', ()=>{
  const buttons = document.querySelectorAll('[data-theme-btn]');
  buttons.forEach(btn => btn.addEventListener('click', ()=>{
    const theme = btn.getAttribute('data-theme-btn');
    document.body.setAttribute('class', theme); // set class via setAttribute
    document.body.setAttribute('data-theme', theme);
  }));
});