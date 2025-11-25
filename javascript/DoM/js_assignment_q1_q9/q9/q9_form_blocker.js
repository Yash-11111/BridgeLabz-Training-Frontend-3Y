// q9_form_blocker.js
document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('theForm');
  const nameI = document.getElementById('name');
  const emailI = document.getElementById('email');
  const passI = document.getElementById('password');
  const msg = document.getElementById('msg');

  function validate(){
    let ok = true; msg.innerHTML='';
    if (!nameI.value.trim()){ showError(nameI,'Name required'); ok=false; }
    if (!emailI.value.includes('@')){ showError(emailI,'Email must contain @'); ok=false; }
    if (passwordValue().length < 6){ showError(passI,'Password min 6 chars'); ok=false; }
    return ok;
  }
  function passwordValue(){ return passI.value || ''; }
  function showError(el, text){ let e = el.nextElementSibling; e.textContent = text; el.classList.add('err'); }
  function clearError(el){ let e = el.nextElementSibling; e.textContent=''; el.classList.remove('err'); }

  [nameI,emailI,passI].forEach(i=> i.addEventListener('input', ()=>{ clearError(i); }));
  form.addEventListener('submit', e=>{
    e.preventDefault();
    if (validate()){ msg.textContent='Form Submitted Successfully'; form.reset(); }
    else msg.textContent='Please fix errors';
  });
});