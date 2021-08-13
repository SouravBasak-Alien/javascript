const friends = [
	{ name: "neymar", salary: 50 },
	{ name: "ronaldinho", salary: 40 },
	{ name: "silva", salary: 70 },
	{ name: "alison", salary: 90 },
]
// const result = friends.reduce((sum, friend) => sum + friend.salary, 0);

const result = friends.reduce((sum, friend) => {
	console.log(sum, friend)
	// output
	// 	0 { name: 'neymar', salary: 50 }
	// 	50 { name: 'ronaldinho', salary: 40 }
	// 	90 { name: 'silva', salary: 70 }
	// 	160 { name: 'alison', salary: 90 }
	return sum + friend.salary
}, 0)
console.log(result)
// 250