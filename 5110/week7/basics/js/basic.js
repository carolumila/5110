
let sq = document.querySelector('#square');
function changeCSS(bgColor, bgImg, radius, left, right) {
    sq.style.backgroundColor = bgColor;
    sq.style.borderRadius = radius;
    sq.style.left = left;
    sq.style.top = right;
    sq.style.border = "black 5px dashed";
    sq.style.backgroundImage = bgImg;
}