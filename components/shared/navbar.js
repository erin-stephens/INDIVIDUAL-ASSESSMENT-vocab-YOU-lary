import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Logo</a>
          <button class="nav-link active" aria-current="page" href="#" id="all-cards">All Vocabulary</button>
          <button class="nav-link active" aria-current="page" id="add-button">Create Entry</button>
        </li>
      </ul>
      <span class="navbar-text">
        <div id="logout-button"></div>
    </div>
  </div>
</nav>`;

  renderToDom('#navBar', domString);
};

export default navBar;
