const url = "http://gamehubapi.local/wp-json/wc/store/products";

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
                Type:  ${cards[0].categories[0].name} <br />
                PEGI: ${cards[0]}<br />
                Release Date: ${cards[0].date}
            </p>
            <p>
                ${cards[0].short_description}
            </p>
            <div class="actions">
            <a href="HTML/buy-the-game.html?id=${cards[0].id}"
            class="main-btn"
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
          <a href="./HTML/forgelegend.html?id=${cards[7].id}">
          <img
              src="${cards[0].image}"
              alt="Super Duper game"
              class="side-img-2"
          />
          </a>
        </div>
        <div>
          <div class="listofanction">
              <h2>${cards[7].title}</h2>
                ${heartIconsHtml}
          </div>
          <div>
              <p class="describtion">
                    Type:  ${cards[7].genre} <br />
                    PEGI: ${cards[7].ageRating}<br />
                    Release Date: ${cards[7].released}
              </p>
              <p>
              ${cards[7].description}
              </p>
              <div class="actions">
              <a href="HTML/buy-the-game.html?id=${cards[7].id}"
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
          <h2>${cards[8].title}</h2>

          ${heartIconsHtml} 
      </div>
      <div>
          <p class="describtion">
              Type:  ${cards[8].genre} <br />
              PEGI: ${cards[8].ageRating}<br />
              Release Date: ${cards[8].released}
          </p>
          <p>
              ${cards[8].description}
          </p>
          <div class="actions">
          <a href="HTML/buy-the-game.html?id=${cards[8].id}"
          class="main-btn "
          >Buy Now</a> 
             ${basketForIndexBTN}
          </div>
      </div>
  </div>
  <div>
        <a href="./HTML/forgelegend.html?id=${cards[8].id}">
        <img
          src="${cards[8].image}"
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
