// =============================================
// main.js — Main Application Logic
// Member responsible: Muhammad Salis (Leader)
// =============================================

// Student data store
let students = [];

/**
 * Add a new student
 * @param {string} name
 * @param {string} matricNo
 */
function addStudent(name, matricNo) {
  students.push({ name, matricNo, scores: [] });
  console.log(`Student ${name} added.`);
}

/**
 * Get all students
 * @returns {Array}
 */
function getStudents() {
  return students;
}
