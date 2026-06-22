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

// =============================================
// grades.js — Grade Calculation Logic
// Member responsible: Alkasim Jelani Aminu (CIS/STE/22/1188)
// =============================================

/**
 * Returns letter grade based on score (Standard Nigerian University Scale)
 * @param {number} score - Score out of 100
 * @returns {string} - Letter grade (A - F)
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
 * Returns grade remark/comment
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

/**
 * Returns grade point (for GPA calculation)
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
 * Calculate grade for a single course
 * @param {string} course 
 * @param {number} score 
 * @returns {Object} {grade, remark, gradePoint}
 */
function calculateCourseGrade(course, score) {
    const grade = getGrade(score);
    return {
        course: course,
        score: score,
        grade: grade,
        remark: getRemark(grade),
        gradePoint: getGradePoint(grade)
    };
}

// Make functions available globally
window.getGrade = getGrade;
window.getRemark = getRemark;
window.getGradePoint = getGradePoint;
window.calculateCourseGrade = calculateCourseGrade;
