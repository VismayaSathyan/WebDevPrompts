const req = new XMLHttpRequest();
let text = document.querySelector('#text');
req.onload = function(){
console.log("It Loaded!!");
console.log(this);
const data = JSON.parse(this.responseText);
console.log(data);
 text.innerText = data.name;
}

req.onerror = function(){
console.log("Error!!");
console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1/");
req.send();