var nam = `neymr`;
switch(nam){
    case `pele`:
        console.log(`no he is not neymar`);
        break;
    case `neymar`:
        console.log(`yes he is neymar`);
        break;
    case `alien`:
        console.log(`no he is not`); 
        break;   
        default:
        console.log(`hello guys`);
    
}
console.log(`hello`);

var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
  default:
    console.log('default')
    break;
  case 1:
    console.log('1');
}

var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal is not extinct.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal is extinct.');
}


var foo = 1;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}



const action = 'say_hello';
switch (action) {
  case 'say_hello': {
    let message = 'hello';
    console.log(message);
    break;
  } 
  case 'say_hi': { 
    let message = 'hi';
    console.log(message);
    break;
  }
  default: { 
    console.log('Empty action received.');
    break;
  } 
}

var newUpdate = `windows11`;
switch(newUpdate) {
  case  `windows-10`:
  {
    console.log(`no this version was old`)
  }
  break
  case `windows-9`:
   
      console.log (`no version was avilable`)
      break
      case `windows-7`:
        console.log(`no this version is old`)
      break
      case `windows11`:
        console.log (`yea this version`);
        break
        default:
          console.log(`sorry`);
  }