/* draggable element */
const item1 = document.querySelector('#drag1');
item1.addEventListener('dragstart', dragStart);
const item2 = document.querySelector('#drag2');
item2.addEventListener('dragstart', dragStart);
const item3 = document.querySelector('#drag3');
item3.addEventListener('dragstart', dragStart);
const item4 = document.querySelector('#drag4');
item4.addEventListener('dragstart', dragStart);
const item5 = document.querySelector('#drag5');
item5.addEventListener('dragstart', dragStart);
const item6 = document.querySelector('#drag6');
item6.addEventListener('dragstart', dragStart);
const item7 = document.querySelector('#drag7');
item7.addEventListener('dragstart', dragStart);
const item8 = document.querySelector('#drag8');
item8.addEventListener('dragstart', dragStart);
const item9 = document.querySelector('#drag9');
item9.addEventListener('dragstart', dragStart);
const item10 = document.querySelector('#drag10');
item10.addEventListener('dragstart', dragStart);
const item11 = document.querySelector('#drag11');
item11.addEventListener('dragstart', dragStart);
const item12 = document.querySelector('#drag12');
item12.addEventListener('dragstart', dragStart);
const item13 = document.querySelector('#drag13');
item13.addEventListener('dragstart', dragStart);
const item14 = document.querySelector('#drag14');
item14.addEventListener('dragstart', dragStart);
const item15 = document.querySelector('#drag15');
item15.addEventListener('dragstart', dragStart);
const item16 = document.querySelector('#drag16');
item16.addEventListener('dragstart', dragStart);
const item17 = document.querySelector('#drag17');
item17.addEventListener('dragstart', dragStart);
const item18 = document.querySelector('#drag18');
item18.addEventListener('dragstart', dragStart);
const item19 = document.querySelector('#drag19');
item19.addEventListener('dragstart', dragStart);
const item20 = document.querySelector('#drag20');
item20.addEventListener('dragstart', dragStart);
const item21 = document.querySelector('#drag21');
item21.addEventListener('dragstart', dragStart);
const item22 = document.querySelector('#drag22');
item22.addEventListener('dragstart', dragStart);
const item23 = document.querySelector('#drag23');
item23.addEventListener('dragstart', dragStart);


function dragStart(e) {
  
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}


/* drop targets */
const boxes = document.querySelectorAll('#div1');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});
const buttonBox = document.querySelector('#calcButtons');
buttonBox.addEventListener('dragenter', dragEnter)
buttonBox.addEventListener('dragover', dragOver);
buttonBox.addEventListener('dragleave', dragLeave);
buttonBox.addEventListener('drop', drop);

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    // draggable.classList.remove('hide');
}