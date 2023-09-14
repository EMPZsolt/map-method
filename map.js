  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];

let results = [];
for (num of nums) {
  results.push(num*2);
}

console.log(results);

// Using map()

const multipleByTwo = function (num) {
  return num*2;
};

const mapResults = nums.map(multipleByTwo);
console.log(mapResults);

// Simplified w/ map()

const simplified = nums.map (function(num) {return num*2});
console.log(simplified);

// Simplfied w/ map() + arrow function

const arrow = nums.map (num => num*2);
console.log(arrow);
// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map (student => [student.name, student.id]);
console.log(studentsWithIds);

const studentObject = students.map (student => ({
  id: student.id,
  name: student.name
}));
console.log(studentObject);

const studentAges = [28, 30, 26];

const studentsWithAge = students.map ((student, index) => ({
  ...student,
  age: studentAges[index]
}));
console.log(studentsWithAge);