import {
  getVocab, htmlVocab, scssVocab, jsVocab
} from '../api/vocabData';
import { showCards } from '../pages/vocab';

const filterEvents = (user) => {
  document.querySelector('#allBtn').addEventListener('click', () => {
    getVocab(user.uid).then(showCards);
  });
  document.querySelector('#htmlBtn').addEventListener('click', () => {
    htmlVocab(user.uid).then(showCards);
  });
  document.querySelector('#scssBtn').addEventListener('click', () => {
    scssVocab(user.uid).then(showCards);
  });
  document.querySelector('#javascriptBtn').addEventListener('click', () => {
    jsVocab(user.uid).then(showCards);
  });
};

export default filterEvents;
