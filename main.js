let btn = document.querySelector('#btn');
let squaresList = []


btn.addEventListener('click', (e) => {
    DeleteGrid();
    CreateGrid();
});

function CreateGrid(){
    let display = document.querySelector('.display');
    let rangeInput = document.querySelector('input[type="range"]');
    let grid = document.querySelector('.grid');
    grid.style = `grid-template-columns: repeat(${rangeInput.value}, 1fr)`;
    let p =  document.querySelector('#size');
    squaresList = [];

    for(let i = 0; i < rangeInput.value*rangeInput.value; i++){
        let square = document.createElement('div');
        square.classList.add('square');
        square.brightness = 1.0;
        square.brightnessDown = true;

        display.appendChild(square);
        squaresList.push(square);
    }

    squaresList.forEach(square => {
    square.addEventListener('mouseover',(e) => {
       square.style.backgroundColor = RandomRgbColor();
        square.style.filter = `brightness(${Birhestness(square)}%)`;

   })})

   rangeInput.addEventListener('input', (e) => {
    p.innerText = `Currently size: (${e.target.value}x${e.target.value})`;
})
}

function DeleteGrid(){
    let display = document.querySelector('.display');
    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }
}

function RandomRgbColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function Birhestness(square) {
    if (square.brightnessDown) {
        square.brightness -= 0.1;
        if (square.brightness <= 0.0) {
            square.brightness = 0.0;
            square.brightnessDown = false;
        }
    } else {
        square.brightness += 0.1;
        if (square.brightness >= 1.0) {
            square.brightness = 1.0;
            square.brightnessDown = true;
        }
    }

    return (square.brightness * 100).toFixed(0); // npr. 90 za brightness(90%)
}



CreateGrid();








