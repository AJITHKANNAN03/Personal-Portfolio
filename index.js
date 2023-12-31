var show=document.querySelector(".bar");
var closes=document.querySelector(".xmark")
var navMenu=document.querySelector(".nav-links");

// here when click menu bar the nav-links will be shows
show.addEventListener("click",
()=>{
    show.classList.toggle("active");
    navMenu.classList.toggle("active");
    show.style.visibility="hidden";
    closes.style.visibility="visible";
}
)

// here when click xmark nav-links will be hidden
closes.addEventListener("click",
()=>{
    closes.classList.toggle("active");
    navMenu.classList.toggle("active");
    show.style.visibility="visible";
    closes.style.visibility="hidden";
}
)

// when click menu links nav links will be hidden
document.querySelectorAll(".links").forEach(n => n.addEventListener("click",
()=>{
    show.classList.remove("active");
    navMenu.classList.remove("active");
    if(window.screen.width<900){
        show.style.visibility="visible";
        closes.style.visibility="hidden";
    }
}))

// side scroll bar script

var scrollContainer=document.querySelector(".slider");
var arrowBtns=document.querySelectorAll(".wrapper h1");
const cardWidth=scrollContainer.querySelector(".work").offsetWidth;

const dragging=(e) =>{
slider.scrollLeft=e.pageX;
}
scrollContainer.addEventListener("mousemove",dragging); 

// buttons working

arrowBtns.forEach(btn => {
    btn.addEventListener("click",()=>{
    scrollContainer.scrollLeft += btn.id === "left" ? -cardWidth : cardWidth;
    });
});

