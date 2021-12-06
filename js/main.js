let elTemp = document.querySelector("#template").content;
let elBox = document.querySelector(".box");
let elBtn1 = document.querySelector('.btn-0');
let elBtn2 = document.querySelector('.btn-1');
let elBtn3 = document.querySelector('.btn-2');
let elBtn4 = document.querySelector('.btn-3');
let elBtn5 = document.querySelector('.btn-4');
let elBtns = document.querySelectorAll('.site-hero__btn');
findNum(1,20);

elBtn1.addEventListener('click', ()=>{
    clearClass();
    elBtn1.classList.add('btn-active')
    findNum(1,20);
})
elBtn2.addEventListener('click', ()=>{
    clearClass();
    elBtn2.classList.add('btn-active')
    findNum(21,40);
})
elBtn3.addEventListener('click', ()=>{
    clearClass();
    elBtn3.classList.add('btn-active')
    findNum(41,60);
})
elBtn4.addEventListener('click', ()=>{
    clearClass();
    elBtn4.classList.add('btn-active')
    findNum(61,80);
})
elBtn5.addEventListener('click', ()=>{
    clearClass();
    elBtn5.classList.add('btn-active')
    findNum(81,100);
})
function findNum(first,last){
    elBox.innerHTML = '';
    for(let item of pokemons){
        if(item.id >= first && item.id <= last){
            render(item)
        }
    }
}
function render(item){
    let newTemp = elTemp.cloneNode(true);
    newTemp.querySelector(".box__img").src = item.img;
    newTemp.querySelector(".box__title").textContent = item.name;
    newTemp.querySelector(".box__id").textContent = `#${item.num}`;
    elBox.append(newTemp);
}
function clearClass() {
    elBtns.forEach((item,index) => {
        item.className = `site-hero__btn btn-${index}`;
    });
}