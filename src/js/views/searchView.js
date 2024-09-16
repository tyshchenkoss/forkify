class SearchView {
  #parentEl = document.querySelector('.search');

  getQuery() {
    const query = this.#parentEl.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  addHandlerSearch(handlerFunction) {
    this.#parentEl.addEventListener('submit', e => {
      e.preventDefault();
      handlerFunction();
    });
  }

  #clearInput() {
    this.#parentEl.querySelector('.search__field').value = '';
  }
}

export default new SearchView();
