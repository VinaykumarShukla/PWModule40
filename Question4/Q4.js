let marks = [85, 92, 78, 99, 88];

let highestMarks = marks[0];
let highestStudent = "Student 1";

for (let i = 1; i < marks.length; i++) {
  highestMarks = marks[i] > highestMarks? marks[i] : highestMarks;
  highestStudent = marks[i] > highestMarks? `Student ${i + 1}` : highestStudent;
}

console.log(`The highest marks scored by ${highestStudent} is ${highestMarks}`);

