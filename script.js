const myLibrary = [];

function Book(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
}


function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

function displayBook(array) {

    let container = document.querySelector('.libraryBody');
    container.textContent = "";
    

    for (let item of array) {
        let card = document.createElement('div');
        document.querySelector('.libraryBody').appendChild(card);
        card.setAttribute("id", "card");
       
        let displayTitle = document.createElement('div');
        let displayAuthor = document.createElement('div');
        let displayPageCount = document.createElement('div');
        
        let displayTitleContent = document.createTextNode(item.title);
        let displayAuthorContent = document.createTextNode(item.author);
        let displayPageCountContent = document.createTextNode(item.pageCount);
        
        displayTitle.appendChild(displayTitleContent);
        displayAuthor.appendChild(displayAuthorContent);
        displayPageCount.appendChild(displayPageCountContent);

        card.appendChild(displayTitle);
        card.appendChild(displayAuthor);
        card.appendChild(displayPageCount);
    }
}






const dialog = document.querySelector("dialog");
const newBook = document.querySelector('.newBook');
let form = document.getElementById('addBookForm');
const closeButton = document.querySelector("dialog button");
const submitButton = document.getElementById('submit');

newBook.addEventListener("click", () => {
    dialog.showModal();
});

submitButton.addEventListener("click", () => {
   let newTitle = document.getElementById('title');
   let printTitle = newTitle.value;
   let newAuthor = document.getElementById('author');
   let printAuthor = newAuthor.value;
   let newPageCount = document.getElementById('pageCount');
   let printPageCount = newPageCount.value;

   let addedBook = new Book(printTitle, printAuthor, printPageCount);
    addBookToLibrary(addedBook);
    displayBook(myLibrary);
});

closeButton.addEventListener("click", () => {
    dialog.close();
});


