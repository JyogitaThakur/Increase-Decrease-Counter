let counterValue = document.getElementById('counter_value');
let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');
let count = 0

increase.addEventListener('click', function(e){
    count+=1;
    counterValue.innerHTML = count;
    counterValue.style.color="green";
});

reset.onclick = function(){
    count = 0;
    counterValue.innerHTML = count;
    counterValue.style.color="black";
}
decrease.addEventListener('click', function(e){
    count-=1;
    counterValue.innerHTML = count;
    if(count < 0){
        counterValue.style.color="red";
    }
    else{
        counterValue.style.color="green";
    }
});

