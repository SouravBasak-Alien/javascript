"use strict";
let myMoney = 60;
myMoney = 70;
let age = 20;
let club = "psg";
const famous = true;
// function...................>>
function fullName(firstName, lastName) {
    return firstName + lastName;
}
const user = fullName("Ben", "Adam");
// another function
function dobleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
dobleItAndConsole(10);
// arrow function--------------->>>>
const add = (x, y) => x + y;
const finalResult = add(52, 20);
console.log(finalResult);
// forLoop-------------->>>
const friends = ["neymar", "messi", "pogba", "ronaldo"];
let MegaFriend = "";
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > MegaFriend.length) {
        MegaFriend = friend;
    }
}
console.log(MegaFriend);
//object -------------->>>
let player;
player = {
    club: "Real Madrid",
    salary: 2000000
};
console.log(player);
const neymar = {
    name: "neymar",
    age: 27,
    club: "Psg",
    salary: 58000000,
    IsPlaying: true
};
console.log(neymar);
