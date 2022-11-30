import addVocabForm from '../components/forms/addVocab';

const domEvents = () => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    if (e.target.id.includes('add-button')) {
      console.warn('add vocab');
      addVocabForm();
    }
  });
};

export default domEvents;
