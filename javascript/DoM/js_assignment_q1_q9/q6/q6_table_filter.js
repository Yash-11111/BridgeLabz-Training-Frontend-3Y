// q6_table_filter.js
document.addEventListener('DOMContentLoaded', ()=>{
  const input = document.getElementById('search');
  const tbody = document.querySelector('#students tbody');
  const noResult = document.getElementById('noResult');
  input.addEventListener('input', ()=>{
    const q = input.value.trim().toLowerCase();
    let any=false;
    Array.from(tbody.rows).forEach(row=>{
      const text = row.textContent.toLowerCase();
      const match = text.includes(q);
      row.style.display = match ? '' : 'none';
      if (match) any=true;
    });
    noResult.style.display = any ? 'none' : '';
  });
});