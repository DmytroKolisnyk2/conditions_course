export const interestCardMarkup = (cards) => {
  const markup = cards.map((item) => `<div class="interests__card test-option" data-id="${item.description}">
    <img
      src="${item.src}"
      alt="${item.description}"
      class="card__img"
    />
    <div class="card__caption"><span>${item.text}</span></div>
  </div>`)
  return firstPart + markup.join('') + secondPart
}

const firstPart = `<section class="interests">
  <div class="decoration decoration__half-circle">
    <img src="./img/design/design-halfCircle.svg" alt="" />
  </div>
  <div class="decoration decoration__dotted-circle">
    <img src="./img/design/design-circleWithDots.svg" alt="" />
  </div>
  <div class="decoration decoration__circle decoration__circle--down">
    <img src="./img/design/design-circle.svg" alt="" />
  </div>

  <div class="interests__content-wrapper">
    <h2 class="interests__headline main__headline">Що було б цікаво творити?</h2>
    <div class="interests__card-wrapper">`;

const secondPart = `</div>
  </div>
</section>`