// array.................................................................
const number = [20,25,0,516];
const friends = ["neymar", "pogba","messi"]
// Object Array..........................................................
const products = [
	{id:1,name:"laptop",price:550},
	{id:2, name:"mobile",price:350},
	{id:3, name:'watch',price:250}
]


// map...................................................................
const names = products.map(product => product.name)
// output = [ 'laptop', 'mobile', 'watch' ]

// foreach........................................................
 products.forEach(Product => console.log(Product.name));
// output=	laptop
// 			mobile
//			watch


//filter...................................................................
const price = products.filter(productPrice => productPrice.price >300 );
// output= [
// 	{ id: 1, name: 'laptop', price: 550 },
// 	{ id: 2, name: 'mobile', price: 350 }
//   ]

// filter..............................................................
const remaining = products.filter(productId => productId.id != 2)
// [
// 	{ id: 1, name: 'laptop', price: 550 },
// 	{ id: 3, name: 'watch', price: 250 }
//   ]


//find  ........................................
const finding = products.find(productFind => productFind.name === "mobile")
// { id: 2, name: 'mobile', price: 350 }