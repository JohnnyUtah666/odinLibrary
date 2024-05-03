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


const newBook = document.querySelector('.newBook');
newBook.addEventListener("click", (event) => {
    alert("You have clicked this button");
});

