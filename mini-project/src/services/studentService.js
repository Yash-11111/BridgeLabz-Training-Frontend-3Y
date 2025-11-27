const API = '/students';

export async function getStudents() {
  const r = await fetch(API);
  return r.json();
}

export async function addStudent(d) {
  const r = await fetch(API, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(d)});
  return r.json();
}

export async function updateStudent(id, d) {
  const r = await fetch(`${API}/${id}`, { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(d)});
  return r.json();
}

export async function deleteStudent(id) {
  return fetch(`${API}/${id}`, { method:'DELETE' });
}