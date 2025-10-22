// Addition of new li

function newListItem() {

    let input = document.getElementsByClassName('bottom-form-box')[0].value;

    if (input.trim() === '') {
        alert("Nothing Written");
    }

    else {


        const ul = document.getElementsByClassName('parent-list')[0];

        const li = document.createElement('li');
        li.className = 'parent-list-li';
        li.onclick = function(event){
            event.stopPropagation();
            omit(event);
        }

        const p = document.createElement('p');
        p.textContent = input;
        p.className = 'parent-list-li-p';

        const button = document.createElement('button');
        button.className = 'parent-list-li-button';
        button.textContent = "x";
        button.onclick = function(event) {
            event.stopPropagation();
            removal(event);
        };

        const button2 = document.createElement('button');
        button2.className = 'parent-list-li-button2';
        button2.textContent = "Swap";
        button2.onclick = function(event) {
            event.stopPropagation();
            swapbox(event);
        };

        let fragment = document.createDocumentFragment();
        fragment.appendChild(p);
        fragment.appendChild(button2);
        fragment.appendChild(button);

        li.appendChild(fragment);
        ul.appendChild(li);

    }

    document.getElementsByClassName('bottom-form-box')[0].value= "";
}

// Removal of Li

function removal(event){
    let ul = document.getElementsByClassName('parent-list')[0];
    let Remove = event.target;
    let li = Remove.parentElement;
    let p = li.querySelector('.parent-list-li-p')
    let index = Array.from(ul.querySelectorAll('.parent-list-li')).indexOf(li);

    alert(`Removing task "${p.textContent}" at position #${index + 1}`);

    li.remove();
}

// checked mark

function omit(event) {
    const lip = event.target;

    if (lip.tagName.toLowerCase() === 'button') return;

    let li, p, button, button2;

    if (lip.tagName.toLowerCase() === 'li') {
        li = lip;
        p = li.querySelector('p'); 
        button = li.querySelector('.parent-list-li-button');
        button2 = li.querySelector('.parent-list-li-button2');
    } 
    else if (lip.tagName.toLowerCase() === 'p') {
        p = lip;
        li = p.parentElement;
        button = li.querySelector('.parent-list-li-button');
        button2 = li.querySelector('.parent-list-li-button2');
    } 
    else {
        return; 
    }

    if (p) p.classList.toggle('completed');
    if (li) li.classList.toggle('completed');
    if (button) button.classList.toggle('completed');
    if (button2) button2.classList.toggle('completed');
}

// swap
// Show the alert box
function swapbox(event){
    let alertbox = document.querySelector('.alertbox');
    alertbox.classList.toggle('show');

    window.clickedItem = event.target;  
}

function swapper(){
    let curr = window.clickedItem;
    let current = curr.parentElement;
    console.log(current);
    
    if (!current) {
        alert("No item selected!");
        return;
    }
    
    let num = parseInt(document.querySelector('.alertbox-box').value);
    console.log(num);
    let allli = document.querySelectorAll('.parent-list-li');
    let array = Array.from(allli);
    console.log(array);
    let length = array.length;
    console.log(length);
    let currentidx = array.indexOf(current);
    console.log(currentidx);
    
    if (currentidx === -1) {
        alert("Selected item not found!");
        return;
    }
    
    let swapindex = num - 1;

    if (isNaN(num) || num < 1 || num > length) {
        alert("Enter Valid Number!");
        return;
    }

    let temp = array[swapindex];
    array[swapindex] = array[currentidx];
    array[currentidx] = temp;

    let ul = document.querySelector('.parent-list');
    ul.innerHTML = '';
    array.forEach(li => ul.appendChild(li));

    // Clean up
    document.querySelector('.alertbox-box').value = '';
    document.querySelector('.alertbox').classList.toggle('show');
}
