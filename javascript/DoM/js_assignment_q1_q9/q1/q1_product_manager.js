// q1_product_manager.js
// Dynamic Product List Manager - Add, Edit (inline), Delete using event delegation
// Usage: include q1.html in browser

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('addForm');
  const input = document.getElementById('productInput');
  const list = document.getElementById('productList');

  // Add product
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = input.value.trim();
    if (!name) return;
    const li = document.createElement('li');
    li.innerHTML = `<span class="name">${escapeHtml(name)}</span>
      <button class="edit">Edit</button><button class="delete">Delete</button>`;
    list.appendChild(li);
    input.value = '';
  });

  // Event delegation for edit/delete and inline save on outside click
  list.addEventListener('click', e => {
    const target = e.target;
    const li = target.closest('li');
    if (target.classList.contains('delete')) {
      li.remove();
      return;
    }
    if (target.classList.contains('edit')) {
      enterEditMode(li);
      return;
    }
  });

  // Click outside to auto-save
  document.addEventListener('click', e => {
    const editing = document.querySelector('li.editing');
    if (!editing) return;
    if (!editing.contains(e.target)) {
      // save and exit edit mode
      saveEdit(editing);
    }
  });

  // Helpers
  function enterEditMode(li) {
    if (li.classList.contains('editing')) return;
    li.classList.add('editing');
    const span = li.querySelector('.name');
    const text = span.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = text;
    span.replaceWith(input);
    input.focus();
    // save on enter
    input.addEventListener('keydown', ev => {
      if (ev.key === 'Enter') {
        saveEdit(li);
      } else if (ev.key === 'Escape') {
        cancelEdit(li, text);
      }
    });
  }

  function saveEdit(li) {
    const input = li.querySelector('input');
    if (!input) return;
    const val = input.value.trim() || 'Untitled';
    const span = document.createElement('span');
    span.className = 'name';
    span.textContent = val;
    input.replaceWith(span);
    li.classList.remove('editing');
  }

  function cancelEdit(li, original) {
    const input = li.querySelector('input');
    if (!input) return;
    const span = document.createElement('span');
    span.className = 'name';
    span.textContent = original;
    input.replaceWith(span);
    li.classList.remove('editing');
  }

  function escapeHtml(s){ return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }
});