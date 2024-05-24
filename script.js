const myLibrary = [];

function Book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
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

        let removeButton = document.createElement('button');
        removeButton.setAttribute("id", "removeButton");
        removeButton.addEventListener("click", () => {
            card.remove();
            myLibrary.pop(card);
        })

       
        let displayTitle = document.createElement('div');
        let displayAuthor = document.createElement('div');
        let displayPageCount = document.createElement('div');
        let displayRead = document.createElement('button');
        displayRead.classList.add("readButton");
    
        
        let displayTitleContent = document.createTextNode(item.title);
        let displayAuthorContent = document.createTextNode(item.author);
        let displayPageCountContent = document.createTextNode(item.pageCount);
        let displayReadContent;
        let removeButtonContent = document.createTextNode("Remove Book");
        
        let readCheckBox = document.getElementById('read').checked;
        if (readCheckBox == true) {
            displayReadContent = document.createTextNode("Read");
        } else {
            displayReadContent = document.createTextNode("Haven't Read");
        }
        

        displayTitle.appendChild(displayTitleContent);
        displayAuthor.appendChild(displayAuthorContent);
        displayPageCount.appendChild(displayPageCountContent);
        displayRead.appendChild(displayReadContent);
        removeButton.appendChild(removeButtonContent);

        card.appendChild(displayTitle);
        card.appendChild(displayAuthor);
        card.appendChild(displayPageCount);
        card.appendChild(displayRead);
        card.appendChild(removeButton);

        const toggleRead = document.querySelector('.readButton');

        toggleRead.addEventListener("click", function(){
            if (toggleRead.textContent == "Read"){
                toggleRead.textContent = "Haven't Read";
            } else {
                toggleRead.textContent = "Read"
            }
        })

    
    }
}







const dialog = document.querySelector("dialog");
const newBook = document.querySelector('.newBook');
let form = document.getElementById('addBookForm');
const closeButton = document.getElementById('cancelButton');
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

   
    if (printTitle == "") {
       return false;
    } else if (printAuthor == "") {
        return false;
    } else if (printPageCount == "") {
        return false;
    } else {
        let addedBook = new Book(printTitle, printAuthor, printPageCount);
    addBookToLibrary(addedBook);
    displayBook(myLibrary);
        dialog.close();
    }
    
    
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

