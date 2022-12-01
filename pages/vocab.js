import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Vocab</h1>';
  renderToDom('#cardContainer', domString);
};

const showCards = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.language}</h6>
        <p class="card-text">${item.description}</p>
        <p class="card-text">${item.time}</p>
        <i id="edit-card-btn--${item.firebaseKey}" class="fas fa-edit"></i>
        <i id="delete-card-btn--${item.firebaseKey}" class="fas fa-trash-alt"></i>
      </div>
    </div>`;
  });
  renderToDom('#cardContainer', domString);
};

export { showCards, emptyCards };
