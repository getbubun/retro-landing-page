const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');
const div = document.getElementById('container');

//Options
const showAMPM = true;
 //show time 
 function showTime(){
    // let today = new Date(2019, 06, 10, 00, 59, 30);
     let today = new Date();
     let hour = today.getHours();
     let min = today.getMinutes();
     let sec = today.getSeconds();
        
        
 //Set AM ot PM

 const amPm = hour >= 12 ? 'PM' : 'AM';

 // 12hr Format
 hour = hour % 12 || 12;

 //Output Time 
 time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAMPM ? amPm : ''}`;

 //calls function in every 1s 
 setTimeout(showTime, 1000);
 }   

 //Add Zero

 function addZero(n){
     return (parseInt(n,10) < 10 ? '0' : '') + n;
 }

//Set Background

function setBgGreet(){
    // let today = new Date(2019, 06, 10, 00, 59, 30);
    let today = new Date();
       hour = today.getHours();

    // Morning background
       if(hour > 3 && hour < 11 ){
        
        if(hour > 3 && hour < 6) div.style.backgroundImage = "url(./img/1-earlymorning.png)";
        else if(hour > 5 && hour < 8 ) div.style.backgroundImage = "url(./img/2-midmorning.png)";
        else if(hour > 7 && hour < 11) div.style.backgroundImage = "url(./img/3-latemorning.png)";
        greeting.textContent = 'Good Morning';
       } 
    // Afternoon Background
       else if( hour > 10 && hour < 15 ) {   
        if( hour > 10 && hour < 13  )div.style.backgroundImage = "url(./img/4-earlyafternoon.png)";
        else if( hour > 12 && hour < 15) div.style.backgroundImage = "url(./img/5-midafternoon.png)";
        else if( hour > 14 && hour < 17) div.style.backgroundImage = "url(./img/6-lateafternoon.png)";
        greeting.textContent = "Good Afternoon";
       } 
     //Evening Background  
       else if( hour > 16 && hour < 20 ){
           if(hour === 17 )div.style.backgroundImage= "url(./img/7-earlyevening.png)";
           else if(hour === 18) div.style.backgroundImage= "url(./img/8-midevening.png)";
           else if(hour === 19 ) div.style.backgroundImage= "url(./img/9-lateevening.png)";
           greeting.textContent = 'Good Evening';     
       }

    //Night Background
       else{
           if( hour > 19 && hour < 23) div.style.backgroundImage= "url(./img/10-earlynight.png)";
           else if( hour > 22 && hour < 25) div.style.backgroundImage= "url(./img/11-midnight.png)";
           else if( hour >= 0 && hour < 3 ) div.style.backgroundImage= "url(./img/12-latenight.png)";
           greeting.textContent = 'Good Night '; 
       }
       
}

//Get Name
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]'
    }else 
    name.textContent = localStorage.getItem('name');
}

//Set Name
function setName(e){
    if(e.type === 'keypress'){
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }else{
        localStorage.setItem('name', e.target.innerText);
    }
}

//Set Focus
function setFocus(e){
    if(e.type === 'keypress'){
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            name.blur();
        }
    }else{
        localStorage.setItem('focus', e.target.innerText);
    }
}

//Get Focus
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]'
    }else 
    focus.textContent = localStorage.getItem('focus');
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run
 showTime();
 setBgGreet();
 getName();
 getFocus();

