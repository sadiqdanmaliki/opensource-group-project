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
// =============================================
// Search / Filter Feature
// Member responsible: Faruq Abdulrahman Ajitata
// =============================================

/**
 * Search students by name or matric number
 * @param {string} keyword
 * @returns {Array}
 */
function searchStudents(keyword) {
  keyword = keyword.toLowerCase().trim();

  return students.filter(student =>
    student.name.toLowerCase().includes(keyword) ||
    student.matricNo.toLowerCase().includes(keyword)
  );
}

/**
 * Display search results in console
 * (Can later be connected to the UI)
 * @param {string} keyword
 */
function filterStudents(keyword) {
  const results = searchStudents(keyword);

  if (results.length === 0) {
    console.log("No matching students found.");
  } else {
    console.table(results);
  }

  return results;
}
