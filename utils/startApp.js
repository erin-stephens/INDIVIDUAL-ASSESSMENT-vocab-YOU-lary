import { getVocab } from '../api/vocabData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navbar';
// import cardsOnDom from '../events/domEvents';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
import { showCards } from '../pages/vocab';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  navBar();
  logoutButton();
  // cardsOnDom();
  navEvents(user);
  getVocab(user.uid).then((cards) => showCards(cards));
};

export default startApp;
