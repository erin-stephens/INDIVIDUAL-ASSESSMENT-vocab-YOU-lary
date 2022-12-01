const filterButtonRow = () => {
  const domString = `
  <button id="htmlBtn" class="btn btn-danger">HTML</button>
  <button id="scssBtn" class="btn btn-danger">SCSS</button>
  <button id="javascriptBtn" class="btn btn-danger">JavaScript</button>`;
  document.querySelector('#filterButtons').innerHTML = (domString);
};

export default filterButtonRow;
