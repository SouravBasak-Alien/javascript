const BrazilPlayer ={
	firstPlayerName : "Neymar",
	lastPlayerName : "jr",
	playerSalary : 5000000,
	playerFullName: function(){
		console.log(this.firstPlayerName , this.lastPlayerName);
	},
	PlayerCharge : function(amount) {
		console.log(this)
		this.playerSalary = this.playerSalary - amount
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


const argentinaPlayerCharge = BrazilPlayer.PlayerCharge.bind(argentinaPlayer);
argentinaPlayerCharge(35000);

console.log(argentinaPlayer.playerSalary)

// outPut
// 24800
//.......................................
const francePlayerCharge = BrazilPlayer.PlayerCharge.bind(francePlayer);
francePlayerCharge(3000);

console.log(francePlayer.playerSalary)
//27000



//5000000