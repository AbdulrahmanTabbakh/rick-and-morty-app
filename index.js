import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

async function fetchCharacterData(page) {
  cardContainer.textContent = "";
  let query = "";

  // nav oder suche

  if (searchQuery.length > 0) {
    query = `?name=${searchQuery}`;
    page = 1;
  } else {
    query = `?page=${page}`;
  }

  const response = await fetch(
    `https://rickandmortyapi.com/api/character${query}`
  );
  const data = await response.json();

  if (data.results && data.results.length > 0) {
    const characters = data.results;
    maxPage = data.info.pages;

    characters.forEach((character) => {
      const image = character.image;
      const characterName = character.name;
      const status = character.status;
      const type = character.type;
      const occurences = character.episode.length;

      CharacterCard(image, characterName, status, type, occurences);
    });

    updatePaginationDisplay(page, maxPage);
  } else {
    cardContainer.textContent =
      "Sorry, we don't have any results for your search.";
  }
}

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

let maxPage = 1;
let page = 1;
let searchQuery = "";

fetchCharacterData(page);
NavButton();
searchBarFuntion();

// hier anfang navButton function

function NavButton() {
  nextButton.addEventListener("click", async () => {
    if (page < maxPage) {
      page++;
      await fetchCharacterData(page);
    }
  });

  prevButton.addEventListener("click", async () => {
    if (page > 1) {
      page--;
      await fetchCharacterData(page);
    }
  });
}

//  hier anfang pagination function

function updatePaginationDisplay(page, maxPage) {
  pagination.textContent = `${page} / ${maxPage}`;
}

// hier anfang the search bar function

function searchBarFuntion() {
  searchBar.addEventListener("submit", async (event) => {
    event.preventDefault();
    searchQuery = searchBar.querySelector(".search-bar__input").value;
    await fetchCharacterData(page);
  });
}
