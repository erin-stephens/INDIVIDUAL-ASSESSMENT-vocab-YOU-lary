import { createVocab, getVocab, updateVocab } from '../api/vocabData';
import { showCards } from '../pages/vocab';

const formEvents = (user) => {
  document.querySelector('#formContainer').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-vocab')) {
      console.warn('Clicked submit vocab');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#language').value,
        time: new Date().toLocaleString('en-US'),
        uid: user.uid,
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then(showCards);
        });
      });
    }

    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#language').value,
        firebaseKey
      };

      updateVocab(payload).then(() => {
        getVocab(user.uid).then(showCards);
      });
    }
  });
};

export default formEvents;
