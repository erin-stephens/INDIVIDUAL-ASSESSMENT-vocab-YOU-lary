import { getVocab } from '../api/vocabData';
// import addVocabForm from '../components/forms/addVocab';
import { showCards } from '../pages/vocab';

const navEvents = (user) => {
  document.querySelector('#all-cards').addEventListener('click', () => {
    console.warn('You clicked this');
    getVocab(user.uid).then(showCards);
  });
};

export default navEvents;
