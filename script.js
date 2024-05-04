const myLibrary = [];

function Book(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
}

const jest = new Book("Infinite Jest", "David Foster Wallace", 1056);

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

addBookToLibrary(jest);

console.log(myLibrary);


const dialog = document.querySelector("dialog");
const newBook = document.querySelector('.newBook');
const closeButton = document.querySelector("dialog button");

newBook.addEventListener("click", () => {
    dialog.showModal();
});
closeButton.addEventListener("click", () => {
    dialog.close();
});


