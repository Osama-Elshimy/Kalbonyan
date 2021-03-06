// A 90 - 100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalculator = function (studentScore, totalScore) {
  const result = studentScore / totalScore;

  const percent = Math.round(result * 100);

  let letterGrade = "";

  if (percent >= 90) {
    letterGrade = "A";
  } else if (percent >= 80) {
    letterGrade = "B";
  } else if (percent >= 70) {
    letterGrade = "C";
  } else if (percent >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  return `You got a ${letterGrade} (${percent}%)!`;
};

const scoreOne = gradeCalculator(9, 20);

console.log(scoreOne);
