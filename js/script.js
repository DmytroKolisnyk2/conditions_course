import { age } from './test-templates/age.js';
import { interests } from './test-templates/interests.js';
import { mathPoint } from './test-templates/mathPoint.js';
import { result } from './test-templates/result.js';
import { subject } from './test-templates/subjects.js';

import { interestsData } from './interests-templates/interestsData.js';

import { interestCardMarkup } from './interests-templates/interests.markup.js';
import { resultMarkup } from './result-templates/result.markup.js';

const main = document.querySelector('.main');

const pages = [age, interests, subject, mathPoint];
const testResult = {};
let page = 0;

const clickHandler = (e) => {
  testResult[document.querySelector('.main__headline').innerHTML] = e.currentTarget.dataset.id;
  removeListeners();
  const nextPage = page + 1;
  if (nextPage < pages.length) {
    if (nextPage === 1) {
      filterInterest(nextPage)
      render(1)
    }
    else {
      render(nextPage);
    };
    page = nextPage;

  } else {
    renderResult(testResult);
    console.log(testResult)
  }
}

const render = (page) => {
  main.innerHTML = pages[page];
  document.querySelectorAll('.test-option').forEach(element => element.addEventListener('click', clickHandler));
}

const renderResult = (testResult) => {
  main.innerHTML = resultMarkup(testResult);
}

const removeListeners = () =>
  document.querySelectorAll('.test-option').forEach(element => element.removeEventListener('click', clickHandler));


const filterInterest = (page) => {
  const filtered = interestsData.filter((item) => item.allowed.includes(Object.values(testResult)[0]));
  pages[1] = interestCardMarkup(filtered);
}


render(page)