import { getVocab } from '../api/vocabData';
import { filterButtonRow, sortDropdown } from '../components/buttons/filterButtons';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navbar';
import domEvents from '../events/domEvents';
import { filterEvents, sortEvents } from '../events/filterEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import { showCards } from '../pages/vocab';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  filterButtonRow();
  sortDropdown(user);
  filterEvents(user);
  sortEvents(user);
  navEvents(user);
  getVocab(user.uid).then((cards) => showCards(cards));
};

export default startApp;
