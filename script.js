const books = document.querySelector(".books");
const form = document.querySelector("#my-form");
const myLibrary = [];

//Object constructor for the Book
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

//code to remove card on click using event delegation
books.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("remove")) {
    const card = e.target.closest(".card");
    card.remove();
    myLibrary.pop(); //reduce array length with each remove so that it does not double card creation on each iteration of our for loop
  };
});

//Dialog box functionality
const dialogBox = document.querySelector("#dialog-box");
const closeDialogBtn = document.querySelector("#close-dialog-button");
const openDialogBtn = document.querySelector("#open-dialog-box");
const addBookBtn = document.querySelector("#add-book-button");

//open dialog box on click and blur the body slightly
openDialogBtn.addEventListener("click", () => {
  dialogBox.showModal();
  document.body.style.filter = "blur(1px)";
});

function removeBlurFilter() {
  document.body.style.filter = "";
}

//close dialog box without submitting (acts like cancel) and remove blur
closeDialogBtn.addEventListener("click", () => {
  dialogBox.close();
  removeBlurFilter();
});

//close on form submit but only if the form is valid and remove blur
addBookBtn.addEventListener("click", () => {
  if (form.checkValidity()) {
    removeBlurFilter();
  }
});

// ------- Getting input from dialog form -------

function getInput() {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const readStatus = document.querySelector(
    'input[name= "readStatus"]:checked'
  );

  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    readStatus.value
  );
  addBookToLibrary(newBook);

  //reset form input after push to library
  title.value = '';
  author.value = '';
  pages.value = '';
}

form.addEventListener("submit", getInput);

// Displaying each item in the array by creating a card div which will be appended to the books container
function displayMyBooks() {
  books.innerHTML = "";
  //loop through array and link new books to already styled css elements
  for (const myBooks of myLibrary) {
    const book = document.createElement("div");
    book.setAttribute("class", "card");
    book.style.position = "relative";
    books.appendChild(book);
    //create the new elements that are appended under the card div
    const img = document.createElement("img");
    img.setAttribute("src", "logos/book-open-blank-variant-outline.svg");
    book.appendChild(img);

    const titleDiv = document.createElement("div");
    titleDiv.setAttribute("class", "title");
    titleDiv.textContent = `Title: ${myBooks.title}`;
    book.appendChild(titleDiv);

    const authorDiv = document.createElement("div");
    authorDiv.setAttribute("class", "author");
    authorDiv.textContent = `Author: ${myBooks.author}`;
    book.appendChild(authorDiv);

    const pagesDiv = document.createElement("div");
    pagesDiv.setAttribute("class", "pages");
    pagesDiv.textContent = `Pages: ${myBooks.pages}`;
    book.appendChild(pagesDiv);

    const BTNremove = document.createElement("button");
    BTNremove.setAttribute("class", "remove");
    BTNremove.textContent = "Remove";
    book.appendChild(BTNremove);

    //function using object value to show the read status and change status on click;
    updateCardBasedOnReadStatus(myBooks, book);
  };
};

form.addEventListener("submit", displayMyBooks);

//function added to for loop to set up card based on radio input
function updateCardBasedOnReadStatus(myLibrary, book) {
  if (myLibrary.readStatus === "Read") {
    const btn = document.createElement("button");
    btn.setAttribute("id", "read-status-data-read");
    btn.textContent = "Read";
    book.appendChild(btn);
    btn.addEventListener("click", () => {
      //change whether a book is read or not by clicking appended button
      if (btn.textContent === "Read") {
        btn.textContent = "not-Read";
        btn.removeAttribute("id", "read-status-data-read");
        btn.setAttribute("id", "read-status-data-notread");
      } else if (btn.textContent === "not-Read") {
        btn.textContent = "Read";
        btn.removeAttribute("id", "read-status-data-notread");
        btn.setAttribute("id", "read-status-data-read");
      };
    });
  } else if (myLibrary.readStatus === "notRead") {
    const btn = document.createElement("button");
    btn.setAttribute("id", "read-status-data-notread");
    btn.textContent = "not-Read";
    book.appendChild(btn);
    btn.addEventListener("click", () => {
      //similar to above, this is repeated and could be refined but addeventlistener did not function outside of this scope
      if (btn.textContent === "Read") {
        btn.textContent = "not-Read";
        btn.removeAttribute("id", "read-status-data-read");
        btn.setAttribute("id", "read-status-data-notread");
      } else if (btn.textContent === "not-Read") {
        btn.textContent = "Read";
        btn.removeAttribute("id", "read-status-data-notread");
        btn.setAttribute("id", "read-status-data-read");
      };
    });
  };
};
