// =============================================
// gpa.js — GPA Calculation Logic
// Member responsible: Abdulrahman Mahmud Ahmad
// =============================================

/**
 * Returns grade point based on letter grade (4.0 scale)
 * @param {string} grade
 * @returns {number}
 */
function getGradePoint(grade) {
  const points = {
    'A': 4.0,
    'B': 3.0,
    'C': 2.0,
    'D': 1.0,
    'E': 0.5,
    'F': 0.0
  };
  return points[grade] !== undefined ? points[grade] : 0.0;
}

/**
 * Calculates GPA from an array of scores
 * @param {number[]} scores - Array of scores
 * @returns {string} - GPA rounded to 2 decimal places
 */
function calculateGPA(scores) {
  if (!scores || scores.length === 0) return '0.00';
  const total = scores.reduce((sum, score) => {
    const grade = getGrade(score);
    return sum + getGradePoint(grade);
  }, 0);
  return (total / scores.length).toFixed(2);
}
