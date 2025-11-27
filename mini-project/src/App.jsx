import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import * as studentService from './services/studentService';

export default function App() {
  const [students, setStudents] = useState([]);
  const [view, setView] = useState('list');
  const [selected, setSelected] = useState(null);
  const [formMode, setFormMode] = useState('add');

  const loadStudents = async () => {
    try {
      const data = await studentService.getStudents();
      setStudents(data);
      alert('Students loaded.');
    } catch (err) {
      console.error(err);
      alert('Failed to load students.');
    }
  };

  const handleAddClick = () => {
    setFormMode('add');
    setSelected(null);
    setView('form');
  };

  const handleEdit = (student) => {
    setFormMode('edit');
    setSelected(student);
    setView('form');
  };

  const handleView = (student) => {
    setSelected(student);
    setView('details');
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this student?')) return;
    try {
      await studentService.deleteStudent(id);
      alert('Deleted. Click Load Students to refresh.');
      setView('list');
    } catch (err) {
      alert('Delete failed.');
    }
  };

  const handleFormSubmit = async (data) => {
    try {
      if (formMode === 'add') await studentService.addStudent(data);
      else await studentService.updateStudent(data.id, data);
      alert('Saved. Click Load Students to refresh.');
      setView('list');
    } catch {
      alert('Save failed.');
    }
  };

  return (
    <div className="container">
      <h1>Student Result Management System</h1>
      <div className="controls">
        <button onClick={loadStudents}>Load Students</button>
        <button onClick={handleAddClick}>Add Student</button>
      </div>

      {view === 'list' && (
        <StudentList
          students={students}
          onEdit={handleEdit}
          onView={handleView}
          onDelete={handleDelete}
        />
      )}

      {view === 'form' && (
        <StudentForm
          mode={formMode}
          student={selected}
          onCancel={() => setView('list')}
          onSubmit={handleFormSubmit}
        />
      )}

      {view === 'details' && (
        <StudentDetails student={selected} onBack={() => setView('list')} />
      )}
    </div>
  );
}