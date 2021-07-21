const studuntInfo = {name : "neymar", idNum: 20, age:25, Job: "player", phone: 02522125};
const {Job} = studuntInfo;
console.log(Job)

const {start,...older} = studuntInfo;
console.log(older)