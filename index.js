let wheel=document.querySelector('.wheel');
let spinBtn=document.querySelector('.spinBtn');
let body=document.querySelector('body');
let result=document.createElement("p");
result.innerHTML="Hurray! You've spinned it. Lets see what your luck has for you!!"
result.style.color="white";
result.style.marginLeft="200px"
result.style.fontSize="2rem"
let value =Math.ceil(Math.random() * 3600);
spinBtn.onclick=function(){
 
body.appendChild(result);

    wheel.style.transform="rotate(" + value +"deg)"
    value+=Math.ceil(Math.random()*3600);

}
let newstyle=document.querySelector('p');
