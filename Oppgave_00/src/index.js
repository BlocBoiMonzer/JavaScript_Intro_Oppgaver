// Oppgave 1
// Må gette #remove og gjøre at onclick av knappen, blir det fjernet
// litt for mye kode, jeg vet, men jeg liker det forståelig i starten.

const removable = document.getElementById("remove");
const removeBtn = document.getElementById("remove-btn");
deleteOnClick(removable, removeBtn);

function deleteOnClick(item, remover) {
    remover.addEventListener('click', function() {
        item.remove();
    });
}



// Oppgave 2

const changeable = document.getElementById("change");
const changeBtn = document.getElementById("change-btn");
changeOnClick(changeable, changeBtn);

function changeOnClick(item, changer) {
    changer.addEventListener('click', function() {
        item.textContent = "Charlie bit my finger or something idk";
    });
}


// Oppgave 3

function updateOutput() {
    const input = document.getElementById("input");
    const output = document.getElementById("input-text");
    output.textContent = input.value;
}

const input = document.getElementById("input");
input.addEventListener('input', updateOutput);

// Oppgave 4
// prøver inline functions

const myList = ['item one', 'item two', 'item three', 'brrrrr'];

const writeBtn = document.getElementById("write-list");
const writeList = document.getElementById("ul");

writeBtn.addEventListener('click', () => {
    writeList.innerHTML = ''; // hvorfor må man tømme listen? idk.

    myList.forEach(item => {
        const li = document.createElement('li'); // creates an element for each item in the array
        li.textContent = item; //gjør at hver ting innenfor li er fra myList arrayen
        writeList.appendChild(li); // legg til li elementene i ul tagen 
    });
});


// Oppgave 5

const select = document.getElementById("select");
const textInput = document.getElementById("text");
const createBtn = document.getElementById("create");
const placeholder = document.getElementById("placeholder");

createBtn.addEventListener('click', function() {
  const selectedOption = select.value;
  const text = textInput.value;

  const element = document.createElement(selectedOption);
  element.textContent = text;

  placeholder.appendChild(element);
});

// Oppgave 6

// Oppgave 6

const removeLiBtn = document.getElementById("remove-li");
const list = document.getElementById("list");

removeLiBtn.addEventListener('click', function() {
  const liElements = list.getElementsByTagName("li");
  if (liElements.length > 0) {
    list.removeChild(liElements[0]);
  }
});

// Oppgave 7

const nameInput = document.getElementById("name");
const orderBtn = document.getElementById("order");

nameInput.addEventListener('input', function() {
  const name = nameInput.value;
  if (name.length > 4) {
    orderBtn.disabled = true;
    orderBtn.style.border = "1px solid red";
  } else {
    orderBtn.disabled = false;
    orderBtn.style.border = "none";
  }
});

// Oppgave 8

const colorBtn = document.getElementById("color");
const childrenList = document.querySelector("ul.children");
const liElements = childrenList.children;

colorBtn.addEventListener('click', () => {
  for (let i = 0; i < liElements.length; i++) {
    if (i % 2 === 0) {
      liElements[i].style.border = "5px solid pink";
      liElements[i].style.marginBottom = "10px";
    } else {
      liElements[i].style.border = "5px solid green";
      liElements[i].style.marginBottom = "10px";
    }
  }
});
