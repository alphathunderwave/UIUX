class myLibrary {
  constructor() {
    this.library = [];
  }
  addBookToLibrary(book) {
    var count = 0;
    this.library.forEach((libBook) => {
      if (
        book.author == libBook.author &&
        book.title == libBook.title &&
        book.pages == libBook.pages
      ) {
        count++;
      }
    });
    if (count == 0) {
      this.library.push(book);
      var div = document.createElement("div");
      var t = document.createElement("h1");
      var a = document.createElement("h2");
      var p = document.createElement("h3");
      t.textContent = book.title;
      a.textContent = book.author;
      p.textContent = book.pages;
      div.appendChild(t);
      div.appendChild(a);
      div.appendChild(p);
      content.appendChild(div);
    }
  }
}

class Book {
  constructor(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
  }
}

const content = document.querySelector(".content");
const form = document.getElementById("bookForm");
var myLib = new myLibrary();
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  form.reset();
  document.getElementById("myForm").style.display = "none";
}
function submitBook() {
  var book = new Book(
    document.getElementById("author").value,
    document.getElementById("title").value,
    document.getElementById("pages").value
  );
  myLib.addBookToLibrary(book);
  console.log(myLib.library);
  closeForm();
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitBook();
});
