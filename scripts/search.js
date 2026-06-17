// /public/js/search.js
export function setupSearch(products) {
  const searchInput = document.querySelector('#search-box');
  const searchResults = document.querySelector('#search-results');
  const searchBtn = document.querySelector('#search-btn');
  const clearSearch = document.querySelector('#clear-btn');
  clearSearch.style.display = 'none';

  let debounceTimeout;
  function search(query) {
    searchResults.innerHTML = '';
    if (query.trim() === '') {
      return;
    }

    let results = [];
    if (products) {
      for (let category in products) {
        for (let item of products[category]) {
          if (item.name.toLowerCase().includes(query.toLowerCase())) {
            results.push(item.name);
          }
        }
      }
    }

    if (results.length) {
      clearSearch.style.display = 'grid';
      searchBtn.style.display = 'none';
      searchResults.style.display = 'block';
      results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        searchResults.appendChild(li);
      });
    } else {
      const li = document.createElement('li');
      li.textContent = 'No results found :(';
      searchResults.appendChild(li);
    }
  }

  searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    if (query.trim() === '') {
      clearSearch.style.display = 'none';
      searchBtn.style.display = 'grid';
      searchResults.style.display = 'none';
    } else {
      clearSearch.style.display = 'grid';
      searchBtn.style.display = 'none';
      searchResults.style.display = 'block';
    }
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => search(query), 300); // Wait 300ms
  });

  clearSearch.addEventListener('click', () => {
    searchResults.innerHTML = '';
    searchInput.value = '';
    clearSearch.style.display = 'none';
    searchBtn.style.display = 'grid';
    searchResults.style.display = 'none';
  });
}