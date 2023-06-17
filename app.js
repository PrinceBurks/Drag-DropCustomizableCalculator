// adds a row to the Calculator body
let divHeight = 310;
let divWidth = 280;
let countDivCol = 6;
let countDivRow = 4;
const calcScreen = document.getElementById("calcScreen");

const updateGrid = document.getElementById('gridBody');



function cloneDiv(){


    const div = document.createElement("div");
    div.classList.add("block");
    div.setAttribute('id', "div1");
    div.addEventListener('dragenter', dragEnter)
    div.addEventListener('dragover', dragOver);
    div.addEventListener('dragleave', dragLeave);
    div.addEventListener('drop', drop);

    document.getElementById("gridBody").appendChild(div);

}



    function addrow(){
// change height of grid div to allow 4 new to bottom
    divHeight = divHeight + 51;
    updateGrid.style.height = divHeight + "px";
    
    
    
    // add divs to grid
    const gridBody = document.querySelector("#gridBody");
    
    for (let i = 0; i < countDivRow; i++){
        cloneDiv();
    
}
countDivCol += 1;
}
//add column to calculator body
function addcol(){

    // change height of grid div to allow 4 new to bottom
        divWidth = divWidth + 67;
        updateGrid.style.width = divWidth + "px";
        calcScreen.style.width = divWidth + "px";
        
        // add divs to grid
        const gridBody = document.querySelector("#gridBody");
        for (let i = 0; i < countDivCol; i++){
            cloneDiv();
        }
        countDivRow += 1;
        
    }