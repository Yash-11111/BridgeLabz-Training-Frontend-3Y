import React, { useState, useEffect } from 'react';

export default function StudentForm({ mode, student, onCancel, onSubmit }) {
  const [form, setForm] = useState({ id: null, name: '', section: '', marks: '', grade: '' });

  useEffect(() => {
    if (mode === 'edit') setForm(student);
  }, [mode, student]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = { ...form, marks: Number(form.marks) };
    if (!data.grade) {
      data.grade =
        data.marks >= 90 ? 'A+' :
        data.marks >= 80 ? 'A' :
        data.marks >= 70 ? 'B' :
        data.marks >= 60 ? 'C' : 'D';
    }
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <label>Name<input name="name" value={form.name} onChange={handleChange} required /></label>
      <label>Section<input name="section" value={form.section} onChange={handleChange} required /></label>
      <label>Marks<input name="marks" type="number" value={form.marks} onChange={handleChange} required /></label>
      <label>Grade<input name="grade" value={form.grade} onChange={handleChange} /></label>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}