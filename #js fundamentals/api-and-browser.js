
// get api method
// fetch("url")
// .then (res => res.json())
// .then (data => console.log(data))


// Json Method
const products = [
	{id:1,name:"laptop",price:550},
	{id:2, name:"mobile",price:350},
	{id:3, name:'watch',price:250}
]

// convert object to Json...............................................................
const jsondata = JSON.stringify(products);

// output
// [
// 	{"id":1,"name":"laptop","price":550},
// 	{"id":2,"name":"mobile","price":350},
// 	{"id":3,"name":"watch","price":250}
// ]


// convert json to object...........................................................
const jsonParse = JSON.parse(jsondata);
// output
// [
// 	{ id: 1, name: 'laptop', price: 550 },
// 	{ id: 2, name: 'mobile', price: 350 },
// 	{ id: 3, name: 'watch', price: 250 }
//   ]

// localStorage set Item
localStorage.setItem("person", JSON.stringify(products))

const strogegetItem = localStorage.getItem('person');
const parsing = JSON.parse(strogegetItem)
console.log(parsing)
const keys = Object.keys(parsing)
console.log(keys)
const value = Object.values(parsing)
console.log(value)