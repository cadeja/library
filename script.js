// DATA STRUCTURES

let myLibrary = [];

let bookID = 0;

function Book(title, author, haveRead, id){
  this.title = title;
  this.author = author;
  this.haveRead = haveRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

Book.prototype.switchReadStatus = function() {
  this.haveRead = this.haveRead == true ? false : true;
}

// WEB INTERFACE

const bookshelf = document.getElementById('bookshelf');


function displayBooks() {
  bookshelf.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++){

    const div = document.createElement('div');
    div.setAttribute('class','book');
    div.setAttribute('id', `book${i}`);
    div.innerHTML = `<div class="book-title">${myLibrary[i].title}</div>`
    div.innerHTML += `<div class="book-author">${myLibrary[i].author}</div>`
    div.innerHTML += `<div class="book-read-status">${myLibrary[i].haveRead}</div>`
    div.innerHTML += `<div class="toggle-read-status"><button id="remove-book-${i}">x</button></div>`;
    bookshelf.appendChild(div);

    //Delete Button
    const removeBook = document.getElementById(`remove-book-${i}`);
    removeBook.addEventListener('click', () => {
      let id = removeBook.id[removeBook.id.length - 1]
      console.log(id);
      myLibrary.splice(id, id+1);
      displayBooks();
      

    });
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

const form = document.getElementById('newBookForm');
const newBookBtn = document.getElementById('newBookBtn');
//form.addEventListener('submit', (event) => {
newBookBtn.addEventListener('click', () => {
  
  let title = form.elements['bookTitle'].value;
  let author = form.elements['bookAuthor'].value;
  let haveRead = form.elements['read'].checked ? true : false;
  addBookToLibrary(new Book(title, author, haveRead));

  modal.style.display = 'none';
  displayBooks();
});