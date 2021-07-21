function stopWatch() {
	let count = 0;
	return	function () {
			count ++
			return count;
		
		}
}
const clockONe  = stopWatch();
console.log(clockONe());

console.log(clockONe());




const clockTwo  = stopWatch();

console.log(clockTwo());

console.log(clockTwo());

console.log(clockTwo());


console.log(clockTwo());


console.log(clockONe());
console.log(clockTwo());