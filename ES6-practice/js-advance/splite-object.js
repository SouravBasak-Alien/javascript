const player = ['pele', 'ronaldo', 'ronaldinho', 'silva', 'neymar' , 'kaka', 'pogba' , 'ribaldo', 'mbappi'];

const plyerSlice = player.slice(2,5)
//output = [ 'ronaldinho', 'silva', 'neymar' ]

const plyerSplice = player.splice(3,2,"dimaria" , "cr7")
// console.log(player)
// output
// ['pele', 'ronaldo','ronaldinho', 'dimaria','cr7','kaka','pogba','ribaldo','mbappi' ]

// console.log(plyerSplice);
// [ 'silva', 'neymar' ]

const playerJoin = player.join('-')
console.log(playerJoin);

// output
// pele-ronaldo-ronaldinho-dimaria-cr7-kaka-pogba-ribaldo-mbappi
