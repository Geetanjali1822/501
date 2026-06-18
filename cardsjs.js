/**
 * Feature Cards Module
 * --------------------
 * Renders cards from JSON data stored in a data attribute.
 * This keeps the component CMS‑agnostic and easy to maintain.
 */

(function () {
  const container = document.getElementById("featureCardsContainer");
  if (!container) return;

  let cardsData;

  try {
    cardsData = JSON.parse(container.dataset.cards);
  } catch (e) {
    console.error("Invalid card data", e);
    return;
  }

  const fragment = document.createDocumentFragment();

  cardsData.forEach((card, index) => {
    const cardEl = document.createElement("article");
    cardEl.className = "feature-card";
    cardEl.setAttribute("role", "region");
    cardEl.setAttribute("aria-label", card.title);

    cardEl.innerHTML = `
      <h3>${card.title}</h3>
      <div class="value">${card.value}</div>
      <p>${card.description}</p>
    `;

    fragment.appendChild(cardEl);
  });

  container.appendChild(fragment);
})();
