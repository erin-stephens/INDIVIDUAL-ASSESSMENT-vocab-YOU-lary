import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navBar"></div>
  <div id="mainContainer">
    <div id="filterButtons"></div>
    <div id="cardContainer"></div>
    <div id="formContainer"></div>
  </div>`;

  renderToDom('#app', domString);
};

export default domBuilder;
