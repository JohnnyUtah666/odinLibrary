const myLibrary = [];

function Book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
    this.returnRead = function() {
        return this.read;
    }
    if (document.getElementById('read').checked == true) {
        this.read = 'Read'
    } else if (document.getElementById('read').checked == false) {
        this.read = "Haven't Read"
    }
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
        let toggleButton = document.createElement('button');

        displayTitle.setAttribute("id", "displayTitle");
        displayAuthor.setAttribute("id", "displayAuthor");
        displayPageCount.setAttribute("id", "displayPageCount");
        toggleButton.setAttribute("id", "toggleButton");
        
        
        
        let displayTitleContent = document.createTextNode(item.title);
        let displayAuthorContent = document.createTextNode(item.author);
        let displayPageCountContent = document.createTextNode(item.pageCount);
        let toggleContent = document.createTextNode(item.read);
        let removeButtonContent = document.createTextNode("Remove Book");
        
        
        

        displayTitle.appendChild(displayTitleContent);
        displayAuthor.appendChild(displayAuthorContent);
        displayPageCount.appendChild(displayPageCountContent);
        toggleButton.appendChild(toggleContent);
        removeButton.appendChild(removeButtonContent);

        card.appendChild(displayTitle);
        card.appendChild(displayAuthor);
        card.appendChild(displayPageCount);
        card.appendChild(toggleButton);
        card.appendChild(removeButton);

       toggleButton.addEventListener("click", () => {
            if (item.read == 'Read') {
                item.read = "Haven't Read";
            } else if (item.read == "Haven't Read") {
                item.read = "Read";
            }
            toggleContent.textContent = item.read;
       });

        

    
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
        let addedBook = new Book(printTitle, printAuthor, printPageCount, read);
        
    addBookToLibrary(addedBook);
    displayBook(myLibrary);
        dialog.close();
    }
    
    
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

