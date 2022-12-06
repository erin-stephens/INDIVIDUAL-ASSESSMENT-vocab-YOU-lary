import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
  <i class="fas fa-futbol fa-6x"></i>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <h4><a class="nav-link active" aria-current="page" href="#" id="all-cards">All Vocabulary</a></h4>
        </li>
        <li class="nav-item">
          <h4><a class="nav-link active" aria-current="page" href="#" id="add-button">Create Entry</a></h4>
        </li>
      </ul>
      <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search">
      <button class="btn btn-outline-success" type="submit" id="searchBtn">Search</button>
    </form>
      <span class="navbar-text">
        <div id="logout-button"></div>
    </div>
  </div>
</nav>`;

  renderToDom('#navBar', domString);
};

export default navBar;
