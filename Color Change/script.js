const body = document.body;
const colorcode =  document.getElementById("color-code");
const changebtn = document.getElementById("change");
const resetbtn = document.getElementById("reset");


function getRandomColor(){
    const letters = '123456789abcdef';
    let color = '#';

    for(let i=0;i<6;i++){
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}   

function changeColor(){
    const newColor = getRandomColor();
    body.style.background = newColor;
    colorcode.innerText = newColor;
    console.log();
}

function resetColor(){
    body.style.background = "#d8cb33";
    colorcode.text='#d8cb33'
}

changebtn.addEventListener("click",changeColor);
resetbtn.addEventListener("click",resetColor);