let myLibrary = [
  {
    "title": "book1",
    "author": "author1"
  },
  {
    "title": "book2",
    "author": "author2"
  }
];

const bookshelf = document.getElementById("bookshelf");

function Book(title, author) {
  this.title = title;
  this.author = author;
}

