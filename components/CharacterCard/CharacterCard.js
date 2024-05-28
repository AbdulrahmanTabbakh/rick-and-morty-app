const cardContainer = document.querySelector('[data-js="card-container"]');

export function CharacterCard(image, characterName, status, type, occurences) {
  cardContainer.innerHTML = "";
  const listElement = document.createElement("li");
  listElement.classList.add("card");
  listElement.innerHTML = `<div class="card__image-container">
  <img
    class="card__image"
    src="${image}"
    alt="${characterName}"
  />
  <div class="card__image-gradient"></div>
</div>
<div class="card__content">
  <h2 class="card__title">${characterName}</h2>
  <dl class="card__info">
    <dt class="card__info-title">Status</dt>
    <dd class="card__info-description">${status}</dd>
    <dt class="card__info-title">Type</dt>
    <dd class="card__info-description">${type}</dd>
    <dt class="card__info-title">Occurrences</dt>
    <dd class="card__info-description">${occurences}</dd>
  </dl>
</div>`;

  cardContainer.append(listElement);
}
