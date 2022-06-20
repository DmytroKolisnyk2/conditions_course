import { resultsData } from "./resultsData.js"

export const resultMarkup = (testResult) => {
  const answers = Object.values(testResult);
  let course = '';
  if (answers[0] === '7' || answers[0] === '8') {

    if (answers[1] === 'scratch') course = 'scratch';
    if (answers[1] === 'buildings Minecraft') course = 'Minecraft Building';

  }
  if (answers[0] === '9' || answers[0] === '10') {

    if (answers[1] === 'sites') course = "front-end junior";
    if (answers[1] === 'buildings & quests Minecraft') course = 'minecraft';
  }
  if (answers[0] === '11') {

    if (answers[1] === 'sites') course = "front-end junior";
    if (answers[1] === "design") course = "it-design";
    if (answers[1] === 'buildings & quests Minecraft') course = 'minecraft';
    if (answers[1] === 'roblox') course = 'roblox';
  }
  if (answers[0] === '12') {

    if (answers[1] === 'sites') course = "front-end";
    if (answers[1] === "design") course = "it-design";
    if (answers[1] === 'buildings & quests Minecraft') course = 'minecraft';
    if (answers[1] === 'roblox') course = 'roblox';
  }
  if (+answers[0] >= 13) {
    if (answers[1] === 'telegram') course = 'python';
    if (answers[1] === 'sites') course = "front-end";
    if (answers[1] === "design") course = "it-design";
    if (answers[1] === "game dev") course = 'game dev';
  }

  const courseObj = resultsData.find((item) => item.text === course);
  return `  <div class="decoration decoration__dotted-circle">
        <img src="./img/design/design-circleWithDots.svg" alt="" />
      </div>
      <div class="decoration decoration__circle decoration__circle--down">
        <img src="./img/design/design-circle.svg" alt="" />
      </div>
      <div class="decoration decoration__half-circle">
        <img src="./img/design/design-halfCircle.svg" alt="" />
      </div>
      <section class="result">
        <div class="result__content-wrapper">
          <h2 class="result__headline main__headline">Ваш курс це...</h2>
          <div class="result__wrapper">
            <img src="${courseObj.src}" alt="${courseObj.text}" class="result__img" />
            <p class="result__caption">${courseObj.text}</p>
          </div>
        </div>
      </section>`
}