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
        display.appendChild(square);
        squaresList.push(square);
    }

    squaresList.forEach(square => {
    square.addEventListener('mouseover',(e) => {
       square.style.backgroundColor = 'black';
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

CreateGrid();








