const url = "https://gamehubapi.alanbrim.no/wp-json/wc/store/products";

async function getGames() {
    try {
        const response = await fetch(url);

        const result = await response.json();

        const cards = result;

        const container = document.querySelector(".action-section");

        container.innerHTML = "";

        for (let i = 0; i < cards.length; i++) {
            container.innerHTML += `
                        <div class="cards-container">
                            <div class="image-part">
                                <a href="forgelegend.html?id=${cards[i].id}"><img src="${cards[i].images[0].src}" alt="Game Picture" class="card-img"/></a>
                                <div> 
                                <a
                                href="../HTML/buy-the-game.html?id=${cards[i].id}"
                                class="main-btn btn-card"
                                >Buy Now</a>  
                                </div> 
                            </div>
                                <div class="short-info-about-the-game">
                                        <h3>${cards[i].name}</h3>
                                        <p>${cards[i].short_description}</p>
                                </div>
                            <div class="action-buttons-for-cards">
                                        <div><p>${cards[i].prices.regular_price} ${cards[i].prices.currency_symbol}</p></div>
                                        ${walleLine}
                                        ${basketBTN} 
                                        ${walleLine}
                                        ${heartIconsHtml}
                            </div>
                        </div>
                                
                    
          `;

            toggleHeartFill();
        }
    } catch (err) {
        console.log(err);
        container.innerHTML = `<p  class="error">There was an error, please reload the page!</p>`;
    }
}

// For the slider from the previous CA
getGames();
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
