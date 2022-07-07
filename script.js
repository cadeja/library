
let myLibrary = [];

class Book {
  constructor(title, author, pages, readStatus = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }

  changeStatus() {
    this.readStatus = !this.readStatus;
  }
}


myLibrary[0] = new Book('Brave New World','Aldous Huxley',200);

class LibraryController {
  
  loadBooks(){
    const books = document.getElementById('books');
    for (let i = 0; i < myLibrary.length; i++){
      const div = document.createElement('div');
      books.appendChild(div);
    }
  }

  addBookEL(){ // event listener
    const btn = document.getElementById('new-book');
    btn.addEventListener('click', this.addBook);
  }

  addBook(){
    let title = window.prompt("Book Title: ");
    let author = window.prompt("Author: ");
    let pages = window.prompt("Number of pages: ");
    
    myLibrary.push(new Book(title,author,pages));
  }

}


let library = new LibraryController();
library.loadBooks();
library.addBookEL();