var selector = document.querySelectorAll('.selection h2');

for(var i = 0; i<selector.length; i++){
  var allDescription =selector[i]
  allDescription.style.backgroundColor = 'blue'
  allDescription.style.color = 'white'
  allDescription.style.fontSize = '30px';

  //inner Html

  allDescription.innerHTML = 'Hello World';


} 
