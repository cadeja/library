// DATA STRUCTURES

let myLibrary = [];


function Book(title, author, haveRead){
  this.title = title;
  this.author = author;
  this.haveRead = haveRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}


// WEB INTERFACE

const bookshelf = document.getElementById('bookshelf');


function displayBooks() {
  bookshelf.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++){
    const div = document.createElement('div');
    div.setAttribute('class','book');
    div.innerHTML = `<div class="book-title">${myLibrary[i].title}</div>`
    div.innerHTML += `<div class="book-author">${myLibrary[i].author}</div>`
    div.innerHTML += `<div class="book-read-status">${myLibrary[i].haveRead}</div>`
    bookshelf.appendChild(div);
  }
}

//initialize bookshelf display
displayBooks();

const modalBtn = document.getElementById('modalBtn');
const modal = document.getElementById('myModal');
const modalClose = document.getElementsByClassName("close")[0];


modalBtn.addEventListener('click', () => {
  // display modal
  modal.style.display = 'block';
});

// Closes modal when user clicks the modalClose x
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}


// Form Submission

const newBookBtn = document.getElementById('newBookBtn');
newBookBtn.addEventListener('click', () => {
  const form = document.getElementById('newBookForm');
  let title = form.elements['bookTitle'].value;
  let author = form.elements['bookAuthor'].value;
  let haveRead = form.elements['read'].checked ? true : false;
  addBookToLibrary(new Book(title, author, haveRead));

  displayBooks();
});