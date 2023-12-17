    const url = "https://gamehubapi.alanbrim.no/wp-json/wc/store/products";

    async function getGames() {
        try {
            const response = await fetch(url);

            const result = await response.json();

            const cards = result;

            const midPic = document.querySelector(".section-2-home");

            const sectionTwo = document.querySelector(".version2");
            const sectionThree = document.querySelector(".version3");

            midPic.innerHTML = "";
            sectionTwo.innerHTML = "";

            for (let i = 0; i < cards.length; i++) {
                midPic.innerHTML = `
            <div>
            <div class="listofanction">
                <h2>${cards[0].name}</h2>
            ${heartIconsHtml}
            </div>
            <div>
                <p class="describtion">
                    Type:  ${cards[0].categories[0].name}<br/>
                    PEGI: ${cards[0].attributes[0].terms[0].name}<br />
                    Release Date: ${cards[0].attributes[1].terms[0].name}
                </p>
                <p>
                    ${cards[0].short_description}
                </p>
                <div class="actions">
                <a href="HTML/buy-the-game.html?id=${cards[0].id}"
                class="main-btn "
                >Buy Now</a> 

                    ${basketForIndexBTN} 
                    </div>
                </div>
            </div>
        </div>
        <div>
        <a href="./HTML/forgelegend.html?id=${cards[0].id}"> <img
            src="${cards[0].images[0].src}"
                alt="forge Legend game"
                class="side-img"
            /></a>
        </div>
            `;

                sectionTwo.innerHTML = `
            <div>
            <a href="./HTML/forgelegend.html?id=${cards[1].id}">
            <img
                src="${cards[1].images[0].src}"
                alt="Super Duper game"
                class="side-img-2"
            />
            </a>
            </div>
            <div>
            <div class="listofanction">
                <h2>${cards[1].name}</h2>
                    ${heartIconsHtml}
            </div>
            <div>
                <p class="describtion">
                        Type:  ${cards[1].categories[0].name} <br />
                        PEGI: ${cards[0].attributes[0].terms[0].name}<br />
                        Release Date: ${cards[1].attributes[1].terms[0].name}
                </p>
                <p>
                ${cards[1].short_description}
                </p>
                <div class="actions">
                <a href="HTML/buy-the-game.html?id=${cards[1].id}"
                class="main-btn "
                >Buy Now</a> 
                ${basketForIndexBTN} 
                    </div>
                </div>
            </div>
        </div>`;
                sectionThree.innerHTML = `
        <div>
        <div class="listofanction">
            <h2>${cards[2].name}</h2>

            ${heartIconsHtml} 
        </div>
        <div>
            <p class="describtion">
            Type:  ${cards[1].categories[0].name}<br/>
            PEGI: ${cards[2].attributes[0].terms[0].name}<br />
            Release Date: ${cards[2].attributes[1].terms[0].name}
            </p>
            <p>
                ${cards[2].short_description}
            </p>
            <div class="actions">
            <a href="HTML/buy-the-game.html?id=${cards[2].id}"
            class="main-btn "
            >Buy Now</a> 
                ${basketForIndexBTN}
            </div>
        </div>
    </div>
    <div>
            <a href="./HTML/forgelegend.html?id=${cards[2].id}">
            <img
            src="${cards[2].images[0].src}"
            alt="Furious game"
            class="side-img-3"
            />
            </a>
    </div>`;
                toggleHeartFill();
            }
        } catch (err) {
            console.log(err);
            container.innerHTML = `<p  class="error">There was an error, please reload the page!</p>`;
        }
    }

    getGames();
