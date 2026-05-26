// =============================================
// grades.js — Grade Calculation Logic
// Member responsible: Alkasim Jelani Aminu
// =============================================

/**
 * Returns letter grade based on score
 * @param {number} score - Score out of 100
 * @returns {string} - Letter grade
 */
function getGrade(score) {
  if (score >= 70) return 'A';
  if (score >= 60) return 'B';
  if (score >= 50) return 'C';
  if (score >= 45) return 'D';
  if (score >= 40) return 'E';
  return 'F';
}

/**
 * Returns grade remark
 * @param {string} grade
 * @returns {string}
 */
function getRemark(grade) {
  const remarks = {
    'A': 'Excellent',
    'B': 'Very Good',
    'C': 'Good',
    'D': 'Pass',
    'E': 'Conditional Pass',
    'F': 'Fail'
  };
  return remarks[grade] || 'Unknown';
}
