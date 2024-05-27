import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

async function fetchCharacterData() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  const characters = data.results;

  characters.forEach((character) => {
    const image = character.image;
    const characterName = character.name;
    const status = character.status;
    const type = character.type;
    const occurences = character.episode.length;

    CharacterCard(image, characterName, status, type, occurences);
  });
}

fetchCharacterData();

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";
