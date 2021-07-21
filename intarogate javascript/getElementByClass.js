var author = document.getElementsByClassName('author');

for(var i = 0; i<author.length; i++){
  var allDescription =author[i]
  allDescription.style.backgroundColor = 'green'
  allDescription.style.color = 'white'
  allDescription.style.fontSize = '30px';

  //inner Html

  allDescription.innerHTML = 'Hello World';


} 

document.querySelector