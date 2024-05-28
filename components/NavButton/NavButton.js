import { fetchCharacterData } from "../../index.js";

const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');

let page = 1;

export function currentPage() {
  nextButton.addEventListener("click", () => {
    page++;
    // fetchCharacterData(page);
    // console.log(page);
  });
  console.log("Next button:", page);
  return page;
}
