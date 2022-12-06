const filterButtonRow = () => {
  const domString = `
  <button id="allBtn" class="btn btn-danger">All Cards</button>
  <button id="htmlBtn" class="btn btn-danger">HTML</button>
  <button id="scssBtn" class="btn btn-danger">SCSS</button>
  <button id="javascriptBtn" class="btn btn-danger">JavaScript</button>`;
  document.querySelector('#filterButtons').innerHTML = (domString);
};

const sortDropdown = () => {
  const domString = `
  <select class="form-select" aria-label="Default select example" id="sort" required>
      <option selected>Sort By</option>
      <option id="alpha">Alphabetically</option>
      <option id="old">Oldest</option>
      <option id="new">Newest</option>
    </select>`;
  document.querySelector('#sortDrop').innerHTML = (domString);
};

export { filterButtonRow, sortDropdown };
