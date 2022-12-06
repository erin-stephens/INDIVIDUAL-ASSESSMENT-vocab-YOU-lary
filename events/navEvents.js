import { getVocab } from '../api/vocabData';
// import addVocabForm from '../components/forms/addVocab';
import { showCards } from '../pages/vocab';

const navEvents = (user) => {
  document.querySelector('#all-cards').addEventListener('click', () => {
    console.warn('You clicked this');
    getVocab(user.uid).then(showCards);
  });

  document.querySelector('#searchBtn').addEventListener('click', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);
    if (e) {
      getVocab(user.uid).then((cards) => {
        const filteredVocab = cards.filter((item) => item.title.toLowerCase().includes(searchValue));
        showCards(filteredVocab);
      });

      document.querySelector('#search').value = '';
    }
  });
};

export default navEvents;
