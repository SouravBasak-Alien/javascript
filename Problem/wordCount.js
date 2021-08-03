var word = `chala ja Bhodk nehi tu ehi patakke beep dunga`;
var count = 0;
for (var i = 0; i < word.length; i++) {
    var element = word[i];
    if (element == " ") {
        count++;
    }
}
count++;
console.log(count);



// var hello = [`hello alien how are you`];
// hello.reverse()
// console.log(hello);