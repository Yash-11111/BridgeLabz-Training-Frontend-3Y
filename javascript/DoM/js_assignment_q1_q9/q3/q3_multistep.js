// q3_multistep.js
document.addEventListener('DOMContentLoaded', () => {
  const steps = Array.from(document.querySelectorAll('.step'));
  let index = 0;
  const nextBtn = document.getElementById('next');
  const backBtn = document.getElementById('back');
  const summary = document.getElementById('summary');

  show();

  nextBtn.addEventListener('click', () => {
    const valid = validateCurrent();
    if (!valid) return;
    if (index < steps.length -1) { index++; show(); }
    else showSummary();
  });

  backBtn.addEventListener('click', () => {
    if (index>0) index--; show();
  });

  function show(){
    steps.forEach((s,i)=> s.style.display = i===index ? 'block' : 'none');
    backBtn.style.display = index===0 ? 'none' : '';
    nextBtn.textContent = index===steps.length-1 ? 'Finish' : 'Next';
  }

  function validateCurrent(){
    const input = steps[index].querySelector('input');
    const val = input.value.trim();
    if (!val) { input.style.border='2px solid red'; return false; }
    // simple email/password checks
    if (input.type==='email') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { input.style.border='2px solid red'; return false; }
    }
    if (input.type==='password') {
      if (val.length < 6) { input.style.border='2px solid red'; return false; }
    }
    input.style.border='';
    return true;
  }

  function showSummary(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    summary.innerHTML = `<h3>Summary</h3><div>Name:${escapeHtml(name)}</div><div>Email:${escapeHtml(email)}</div>`;
  }

  function escapeHtml(s){ return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }
});