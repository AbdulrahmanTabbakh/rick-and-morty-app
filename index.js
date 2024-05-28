import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

// States
let page = 1;
let maxPages = 1;
let searchQuery = "";

fetchCharacterData();

// Function for fetch and render
export async function fetchCharacterData() {
  cardContainer.innerHTML = "";

  let query = "";

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
  const characters = data.results;
  maxPages = data.info.pages;

  updatePagination(page, maxPages);

  characters.forEach((character) => {
    const image = character.image;
    const characterName = character.name;
    const status = character.status;
    const type = character.type;
    const occurences = character.episode.length;

    CharacterCard(image, characterName, status, type, occurences);
  });
}

// Event listeners for navigation
nextButton.addEventListener("click", () => {
  if (page < maxPages) {
    page++;
    fetchCharacterData();
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacterData();
  }
});

// Function for Pagiantion
function updatePagination(page, maxPages) {
  pagination.textContent = `${page} / ${maxPages}`;
}

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = searchBar.query.value;

  console.log(searchQuery);
  fetchCharacterData();
});
