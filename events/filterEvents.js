import {
  getVocab, htmlVocab, scssVocab, jsVocab, sortAlpha, sortNew, sortOld
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

const sortEvents = (user) => {
  document.querySelector('#sort').addEventListener('change', (e) => {
    console.warn('you selected this');
    if (e.target.value.includes('Alphabetically')) {
      console.warn('alphabet shows');
      sortAlpha(user.uid).then(showCards);
    }

    if (e.target.value.includes('Newest')) {
      sortNew(user.uid).then(showCards);
    }

    if (e.target.value.includes('Oldest')) {
      sortOld(user.uid).then(showCards);
    }
  });
};
export { filterEvents, sortEvents };
