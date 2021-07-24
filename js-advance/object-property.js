const students = [
	{id: 20, name: 'pele'},
	{id: 15, name: 'neymar'},
	{id: 18, name: 'jesus'},
	{id: 21, name: 'silva'}

]



// const newStudent = []
// for (let i = 0; i < students.length; i++) {
// 	const cheaker = students[i];
	
// 	const studentValue = cheaker.name;	
// 	newStudent.push(studentValue)
// }
// console.log(newStudent);  //output all = [name]





//map...........
const studentName = students.map(s => s.name);
console.log(studentName);

//filter...........
const studentId = students.filter(s => s.id < 20);
console.log(studentId);

//filter...........
const studentFind= students.find(s => s.id < 20);
console.log(studentFind);