const bar = document.querySelector(".fa-bars");
const list = document.querySelector(".list");

bar.addEventListener("click",()=>{
    list.classList.toggle("show-menu");
})