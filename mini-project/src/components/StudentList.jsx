import React from 'react';

export default function StudentList({ students, onEdit, onView, onDelete }) {
  return (
    <div>
      <h2>Students</h2>
      <table className="students-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Section</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 && (
            <tr><td colSpan="6">No data. Click Load Students.</td></tr>
          )}
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.section}</td>
              <td>{s.marks}</td>
              <td>{s.grade}</td>
              <td>
                <button onClick={() => onView(s)}>View</button>
                <button onClick={() => onEdit(s)}>Edit</button>
                <button onClick={() => onDelete(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}