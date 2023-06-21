let myLibrary = [];
var content = document.querySelector(".content");

function Book(author, title, pages) {
  var book = [];
  book.push(author, title, pages);
  return book;
}

function addBookToLibrary(b) {
  myLibrary.push(b);
  var text = document.createElement("h1");
  text.textContent = myLibrary;
  content.appendChild(text);
}

const addBook = document.createElement("button");
addBook.addEventListener("click", () => {
  var b = Book("justin", "goob", 123);

  addBookToLibrary(b);
});
addBook.textContent = "Add Book";

document.querySelector(".content").append(addBook);
