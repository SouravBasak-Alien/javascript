const BrazilPlayer ={
	firstPlayerName : "Neymar",
	lastPlayerName : "jr",
	playerSalary : 5000000,
	playerFullName: function(){
		console.log(this.firstPlayerName , this.lastPlayerName);
	},
	PlayerCharge : function(amount,tax,tips) {
		console.log(this)
		this.playerSalary = this.playerSalary - amount - tax - tips;
		return this.playerSalary
	}
}


const argentinaPlayer ={
	firstPlayerName : "messi",
	lastPlayerName : "jr",
	playerSalary : 60000
	
}

const francePlayer ={
	firstPlayerName : "pogba",
	lastPlayerName : "jr",
	playerSalary : 30000
}


// call + [coma,]
BrazilPlayer.PlayerCharge.call(argentinaPlayer,20000,20,10);
console.log(argentinaPlayer.playerSalary)
// output
// 39970
// ............................................
// with tax tips
BrazilPlayer.PlayerCharge.call(francePlayer,25000,20,50);
console.log(francePlayer.playerSalary)
// output
// 4930