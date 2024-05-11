const myLibrary = [];

function Book(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
}

const jest = new Book("Infinite Jest", "David Foster Wallace", 1056);
const bolano = new Book("2666", "Roberto Bolaño", 893);
const champion = new Book("Breakfast of Champions", "Kurt Vonnegut", 295);

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

addBookToLibrary(jest);
addBookToLibrary(bolano);
addBookToLibrary(champion);

function displayBook(array) {

    let container = document.querySelector('.libraryBody');
    container.textContent = "";
    

    for (let item of array) {
        let card = document.createElement('div');
        document.querySelector('.libraryBody').appendChild(card);
       
        let displayTitle = document.createTextNode(item.title);
        let displayAuthor = document.createTextNode(item.author);
        let displayPageCount = document.createTextNode(item.pageCount);

        card.appendChild(displayTitle);
        card.appendChild(displayAuthor);
        card.appendChild(displayPageCount);

    }
}


displayBook(myLibrary);
displayBook(myLibrary);

const dialog = document.querySelector("dialog");
const newBook = document.querySelector('.newBook');
const closeButton = document.querySelector("dialog button");

newBook.addEventListener("click", () => {
    dialog.showModal();
});
closeButton.addEventListener("click", () => {
    dialog.close();
});


