let myMoney = 60;
myMoney = 70;


let age:number = 20;

let club:string = "psg";
const famous:boolean = true;

// function...................>>

function fullName(firstName:string,lastName:string):string {
	return firstName + lastName;
}
const user:string = fullName("Ben", "Adam");

// another function
function dobleItAndConsole(num:number):void {
	const result = num * 2;
	console.log(result)
}
dobleItAndConsole(10)

// arrow function--------------->>>>
const add =(x:number , y:number) => x+y;
const finalResult:number =add (52,20);
console.log(finalResult)
// forLoop-------------->>>
const  friends:string[] = ["neymar" , "messi", "pogba", "ronaldo"];
let MegaFriend = "";
for (let i = 0; i < friends.length; i++) {
	const friend = friends[i];
	if (friend.length > MegaFriend.length ) {
		MegaFriend = friend
	}
}
console.log(MegaFriend)
//object -------------->>>
let player :{
	club : string,
	salary: number
}
player = {
	club : "Real Madrid",
	salary:2000000
}

console.log(player)

// interface------------------------------------->>>>>
interface Player{
	name: string,
	age : number,
	club: string,
	salary?: number,
	IsPlaying : boolean;
}
const neymar:Player = {
	name:"neymar",
	age:27,
	club:"Psg",
	salary:58000000,
	IsPlaying: true

}
const messi:Player ={
	name : "messi",
	club : "baralona",
	age : 35,
	IsPlaying : true
}

console.log(neymar)