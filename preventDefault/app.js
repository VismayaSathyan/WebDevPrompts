const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catNames')
const list = document.querySelector('#cats');
const submit = document.querySelector('#butn');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let catNames = input.value;
    const newLi = document.createElement('li');
    newLi.innerText = catNames;
    list.append(newLi);
    input.value=" ";
});