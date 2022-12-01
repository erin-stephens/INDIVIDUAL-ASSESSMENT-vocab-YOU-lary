import { deleteVocab, getVocab, getSingleVocab } from '../api/vocabData';
import addVocabForm from '../components/forms/addVocab';
import { showCards } from '../pages/vocab';

const domEvents = (user) => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    if (e.target.id.includes('add-button')) {
      console.warn('add vocab');
      addVocabForm();
    }
  });
  document.querySelector('#cardContainer').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab(user.uid).then(showCards);
        });
      }
    }

    if (e.target.id.includes('edit-card')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(vocabObj, user));
    }
  });
  document.querySelector('#filterButtons').addEventListener('click', (e) => {
    if (e.target.id.includes('htmlBtn')) {
      console.warn('this button is html');
    }
    if (e.target.id.includes('scssBtn')) {
      console.warn('this button is scss');
    }
    if (e.target.id.includes('javascriptBtn')) {
      console.warn('this button is javascipt');
    }
  });
};

export default domEvents;
