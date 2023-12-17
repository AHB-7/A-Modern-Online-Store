const container = document.querySelector(".main-section");

const quaryStrings = document.location.search;

const params = new URLSearchParams(quaryStrings);

const id = params.get("id");

const url = "https://gamehubapi.alanbrim.no/wp-json/wc/store/products/" + id;

async function fetchGame() {
    try {
        const response = await fetch(url);

        const jason = await response.json();

        const txes = ((10 / 100) * jason.prices.regular_price).toFixed(1);

        const totalPrice = (
            parseFloat(txes) + parseFloat(jason.prices.regular_price)
        ).toFixed(1);

        container.innerHTML = "";

        container.innerHTML = `
        <div><h1 class="your-orders">Your Orders</h1></div>
        <br />
        <div class="items-container">
     
                <a href="../HTML/forgelegend.html?id=${jason.id}"
                    ><img
                        src="${jason.images[0].src}"
                        alt="Forgelegend"
                        class="img-buy"
                /></a>
        
            <div>
                <div class="text-and-numbers">
                    <h3>${jason.name}</h3>
                    <label for="number-input" class="for-wave"
                        >Number of items:</label
                    >
                    <input
                        id="number-input"
                        type="number"
                        value="1"
                        min="1"
                    />
                </div>
            </div>
            <div class="price-platform-container">
              
                    <p class="price price-buy">${jason.prices.regular_price} ${jason.prices.currency_symbol}</p>
                
            </div>
        </div>
        <div class="total-price-container">
            <p class="tot-tax">Total VAT</p>
            <p class="tot-tax">${txes} ${jason.prices.currency_symbol}</p>
        </div>
        <div class="total-price-container">
            <p class="tot-price">Total ${jason.prices.currency_symbol}</p>
            <p class="tot-price">${totalPrice} ${jason.prices.currency_symbol}</p>
        </div>
        <div class="btn-container">
            <a
                href="../HTML/Purchase-stage1.html"
                class="main-btn green"
                >Purchase</a
            >
        </div>
    `;
        toggleHeartFill();
    } catch (err) {
        console.log(err);
        container.innerHTML = `<p  class="error">There was an error, please reload the page!</p>`;
    }
}

fetchGame();
