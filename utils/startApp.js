// import { getVocab } from '../api/vocabData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';

const startApp = (user) => {
  domBuilder(user);
  // domEvents(user);
  // navBar();
  logoutButton();
  // getVocab(user.uid).then((cards) => showCards(cards));
};

export default startApp;
