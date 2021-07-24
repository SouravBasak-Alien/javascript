// new version......................>>>>>>>>>>>>
class Player{
	constructor(firstName, lastName, salary){
		this.firstName = firstName;
		this.lastName = lastName;
		this.salary = salary;
	}
}
const starPlayer = new Player ("neymar","jr","1500000");
console.log(starPlayer)





//old version.......................>>>>>
function People(firstName,lastName,age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
}
const PeopleInfo = new People("Thiago","Silva","36");
console.log(PeopleInfo)