import { age } from './test-templates/age.js';
import { interests } from './test-templates/interests.js';
import { mathPoint } from './test-templates/mathPoint.js';
import { result } from './test-templates/result.js';
import { subject } from './test-templates/subjects.js';

const main = document.querySelector('.main');

const pages = [age, interests, subject, mathPoint];
const testResult = {};
let page = age;

const clickHandler = (e) => {
  testResult[document.querySelector('.main__headline').innerHTML] = e.currentTarget.dataset.id;
  removeListeners();
  const nextPage = pages[pages.indexOf(page) + 1];
  if (nextPage) {
    render(nextPage);
    page = nextPage;
  } else {
    render(result);
    console.log(testResult)
  }
}

const render = (page) => {
  main.innerHTML = page;
  page !== result && document.querySelectorAll('.test-option').forEach(element => element.addEventListener('click', clickHandler));
}

const removeListeners = () =>
  document.querySelectorAll('.test-option').forEach(element => element.removeEventListener('click', clickHandler));

render(page)
