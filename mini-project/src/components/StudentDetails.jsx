import React from 'react';

export default function StudentDetails({ student, onBack }) {
  return (
    <div>
      <h2>Student Details</h2>
      <p>ID: {student.id}</p>
      <p>Name: {student.name}</p>
      <p>Section: {student.section}</p>
      <p>Marks: {student.marks}</p>
      <p>Grade: {student.grade}</p>
      <button onClick={onBack}>Back</button>
    </div>
  );
}