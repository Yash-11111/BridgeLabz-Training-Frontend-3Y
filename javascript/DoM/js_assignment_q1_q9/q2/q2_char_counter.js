// q2_char_counter.js
document.addEventListener('DOMContentLoaded', () => {
  const ta = document.getElementById('ta');
  const counter = document.getElementById('counter');
  const resetBtn = document.getElementById('resetBtn');
  const MAX = 100;

  ta.addEventListener('keydown', e => {
    const remaining = MAX - ta.value.length;
    if (remaining <= 0 && e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
    }
  });

  ta.addEventListener('input', () => update());
  resetBtn.addEventListener('click', () => { ta.value=''; update(); });

  function update(){
    const left = MAX - ta.value.length;
    counter.textContent = left + ' chars left';
    counter.style.color = '';
    counter.style.background = '';
    if (left <= 0) {
      counter.style.background = 'red';
      counter.style.color = 'white';
      ta.value = ta.value.slice(0, MAX);
    } else if (left <= 20) {
      counter.style.background = 'yellow';
    } else {
      counter.style.background = '';
    }
  }
  update();
});