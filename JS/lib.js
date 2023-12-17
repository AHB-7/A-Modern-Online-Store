const heartIconsHtml = `
<svg
class="icon"
viewBox="0 0 472 421"
fill="none">
<path
d="M117.792 0C52.7589 0 0.0390625 52.1925 0.0390625 116.575C0.0390625 168.551 20.6378 291.902 223.475 416.616C230.82 421.133 240.269 421.133 247.614 416.616C450.45 291.902 471.05 168.551 471.05 116.575C471.05 52.1925 418.33 0 353.297 0C288.265 0 235.545 70.6517 235.545 70.6517C235.545 70.6517 182.825 0 117.792 0Z"
fill="white"
class="heart"/>
</svg>   `;

const buyNowBTN = `  
`;

const buyNowForInfoBTN = `  
<a
href="../HTML/buy-the-game.html"
class="main-btn"
>Buy Now</a>  `;

const basketBTN = ` <div><a href="#"><img src="../assets/basket.png" alt="bascket" class="icon basket"/></a></div>`;
const basketForIndexBTN = ` <div><a href="#"><img src="./assets/basket.png"alt="bascket" class="icon basket"/></a></div>`;

const walleLine = `<div class="wall"></div>`;

function toggleHeartFill() {
    const hearts = document.querySelectorAll(".heart");

    hearts.forEach((heart) => {
        heart.addEventListener("click", () => {
            if (heart.getAttribute("fill") === "white") {
                heart.setAttribute("fill", "red");
            } else {
                heart.setAttribute("fill", "white");
            }
        });
    });
}
