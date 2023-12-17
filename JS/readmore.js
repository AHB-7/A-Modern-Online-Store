const container = document.querySelector("#txt-container");

const quaryStrings = document.location.search;

const params = new URLSearchParams(quaryStrings);

const id = params.get("id");

console.log(params);

const url = "https://gamehubapi.alanbrim.no/wp-json/wc/store/products/" + id;

console.log(url);

async function fetchGame() {
    try {
        const response = await fetch(url);

        const jason = await response.json();

        console.log(jason);

        container.innerHTML = "";

        container.innerHTML = `
    <div>
    <img
        src="${jason.images[0].src}"
        class="side-img-2"
    />
</div>

<div class="txt">
    <div class="listofanction">
 
    <h2 class="txt-title">${jason.name}</h2>
    ${heartIconsHtml}</div>
       
    <div>
        <p class="describtion">
        Type:  ${jason.categories.name} <br />
        PEGI: ${jason.attributes[0].terms[0].name}<br />
        Release Date: ${jason.attributes[1].terms[0].name}
        </p>
        <p>
            ${jason.description}
        </p>
        <h2 style="color: white; font-size: 1.4rem; margin:1rem auto;">Pris: ${jason.prices.regular_price} ${jason.prices.currency_symbol}</h2>
        <div class="actions">
        <a href="../HTML/buy-the-game.html?id=${jason.id}"
                                class="main-btn "
                                >Buy Now</a> 
            ${basketBTN} 
            </div>
    </div>
</div>
    `;
        toggleHeartFill();
    } catch (err) {
        console.log(err);
        container.innerHTML = `<p  class="error">There was an error, please reload the page!</p>`;
    }
}

fetchGame();
