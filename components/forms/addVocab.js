import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
    <div class="form-group">
      <label for="image">Title</label>
      <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
    </div>
    <div class="form-group">
      <label for="image">Definition</label>
      <input type="text" class="form-control" id="description" placeholder="Enter a definition" value="${obj.description || ''}" required>
    </div>
    <select class="form-select" aria-label="Default select example" id="language" required>
      <option selected>Choose a Language</option>
      <option value="HTML"${obj.language === 'HTML' ? 'selected' : ''}>HTML</option>
      <option value="SCSS"${obj.language === 'SCSS' ? 'selected' : ''}>SCSS</option>
      <option value="JavaScript"${obj.language === 'JavaScript' ? 'selected' : ''}>JavaScript</option>
    </select>
    <a id="time"></a>
    <button type="submit" class="btn btn-primary mt-3">Submit Vocab</button>
  </form>`;

  renderToDom('#formContainer', domString);
};

export default addVocabForm;
