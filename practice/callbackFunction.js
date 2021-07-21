function callback(name, age, Player){
    console.log("name",name);
    console.log("age",age);
    Player();
}
function Brazilian(){
    console.log(`Brazilian player`)
}
function France(){
    console.log(`France player`)
}
callback(`neymar`, 26, Brazilian);
callback(`pogba`, 23, France);