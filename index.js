function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(json => renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

function fifthBook() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(json => console.log(json[4].name))
}

function oneThousanthAndThirtyFirstCharacter() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(function(json) {
    characters = json.flatMap(element => element.characters);
    console.log(characters[1031])
  })
}

function totalNumberOfPages() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(function(json) {
    pageNumbers = json.map(element => element.numberOfPages);
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    console.log(pageNumbers.reduce(reducer))
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
