const btn = document.querySelector('button');
const h1 = document.querySelector('#wlcm');
btn.addEventListener('click', function(){
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;

})

const makeRandColor= ()=>{
    let r = Math.floor(Math.random()*255) + 1;
    let g = Math.floor(Math.random()*255) + 1;
    let b = Math.floor(Math.random()*255) + 1;
    if(r<=20 || g<=20 || b<=20){
        h1.style.backgroundColor = 'white';
    }
    return `rgb(${r}, ${g}, ${b})`;
}