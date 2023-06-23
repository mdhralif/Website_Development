const carousal = document.querySelector(".carousal");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousal.querySelector(".card").offsetWidth;


let isDragging=false, startX,startScrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener("click",() => {
        carousal.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) => {
    isDragging = true;
    carousal.classList.add("dragging");
    startX= e.pageX;
    startScrollLeft =carousal.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    carousal.scrollLeft= startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousal.classList.remove("dragging");
}

carousal.addEventListener("mousedown",dragStart);
carousal.addEventListener("mousemove",dragging);
document.addEventListener("mouseup",dragStop);