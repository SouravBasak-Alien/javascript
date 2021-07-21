var firstButton =document.getElementById('first-btn');
firstButton.onclick = firstClick
function firstClick(){
   document.body.style.backgroundColor = "tomato"
   document.body.style.color = "black"
}

//another

var secondBtn = document.getElementById('second-btn').addEventListener('click',secondClick)
function secondClick(){
    document.body.style.backgroundColor = "green"
    document.body.style.color = "yellow"
 }
 //another

 var thirdBtn = document.getElementById('third-btn');
 thirdBtn.addEventListener('mousedown',function(){
     document.body.style.backgroundColor = "blue"
     document.body.style.color = "red"
 })