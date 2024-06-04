const button = document.querySelectorAll('.remove');
const books = document.querySelector('.books');
const form = document.querySelector('#my-form');
const cards = document.querySelectorAll('.card');
const readButton = document.querySelectorAll('.read');
const tickSymbol = document.querySelectorAll('#tick');
const myLibrary = [];



//Object constructor for the Book 
function Book (title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
};

function addBookToLibrary (book) {
        myLibrary.push(book);
        
};

//code to remove card on click using event delegation
books.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('remove')) {
                const card = e.target.closest('.card');
                card.remove();
                myLibrary.pop()  //reduce array length with each remove so that it does not double card creation on each iteration of our for loop
        };
    });


        
//Dialog box functionality
const dialogBox = document.querySelector('#dialog-box')
const closeDialogBtn = document.querySelector('#close-dialog-button')
const openDialogBtn = document.querySelector('#open-dialog-box')
const addBookBtn = document.querySelector('#add-book-button')

//open dialog box on click and blur the body slightly
openDialogBtn.addEventListener('click', () => {
    dialogBox.showModal();
    document.body.style.filter = 'blur(1px)';
})

function removeBlurFilter () {
  document.body.style.filter = '';
}

//close dialog box without submitting (acts like cancel) and remove blur
closeDialogBtn.addEventListener('click', () => {
    dialogBox.close();
    removeBlurFilter();
})

//close on form submit but only if the form is valid and remove blur
addBookBtn.addEventListener('click', () => {
  if (form.checkValidity()) {
    removeBlurFilter();
  }
})

// ------- Getting input from dialog form -------

function getInput () {
  const title = document.querySelector('#title');
  const author= document.querySelector('#author');
  const pages = document.querySelector('#pages');
  const checkedRadio = document.querySelector('input[name= "readStatus"]:checked');

  const newBook = new Book (title.value, author.value, pages.value, checkedRadio);
  addBookToLibrary(newBook);
}

form.addEventListener('submit', getInput);


// Displaying each item in the array by creating a card div which will be appended to the books container
function displayMyBooks () {
  books.innerHTML = '';
  //loop through array and link new books to already styled css elements
  for(const myBooks of myLibrary) {
    const book = document.createElement('div');
    book.setAttribute('class', 'card');
    books.appendChild(book);
    //create the new elements that are appended under the card div
    const img = document.createElement('img');
    img.setAttribute('src', 'logos/book-open-blank-variant-outline.svg');
    book.appendChild(img);

    const titleDiv = document.createElement('div');
    titleDiv.setAttribute('class', 'title');
    titleDiv.textContent = `Title: ${myBooks.title}`;
    book.appendChild(titleDiv);

    const authorDiv = document.createElement('div');
    authorDiv.setAttribute('class', 'author');
    authorDiv.textContent = `Title: ${myBooks.author}`;
    book.appendChild(authorDiv);

    const pagesDiv = document.createElement('div');
    pagesDiv.setAttribute('class', 'pages');
    pagesDiv.textContent = `Title: ${myBooks.pages}`;
    book.appendChild(pagesDiv);

    const tick$btn = document.createElement('div');
    tick$btn.setAttribute('class', 'tick-plus-button');
    book.appendChild(tick$btn);
    
    const BTNremove = document.createElement('button');
    BTNremove.setAttribute('class', 'remove');
    BTNremove.textContent = 'Remove';
    book.appendChild(BTNremove);
  };
};

form.addEventListener('submit', displayMyBooks)

