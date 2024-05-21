const button = document.querySelectorAll('.remove');
const books = document.querySelector('.books')
const cards = document.querySelectorAll('.card')
const addBookButton = document.querySelector('.addbook-section button')
const readButton = document.querySelectorAll('.read')
const tickSymbol = document.querySelectorAll('#tick')
const myLibrary =  [];
console.log(tickSymbol);
function Book () {

}


function addBookToLibrary () {

}



//code to remove card on click using event delegation
books.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('remove')) {
                const card = e.target.closest('.card');
                card.remove()
        }
    })


//code to change tickSymbol to X when unread

 readButton.forEach((button) => {
        button.addEventListener("click", () => {
                if (button.textContent === 'Read') {
                        button.textContent = 'Not Read';
                        button.style.background = 'red';
                                for(const symbol of tickSymbol) {
                                        symbol.textContent = 'X';
                                        symbol.style.color = 'red';
                                }
                }
                else if (button.textContent === 'Not Read') {
                        button.textContent = 'Read';
                        button.style.background = 'Green'
                                for(const symbol of tickSymbol) {
                                        symbol.textContent = '✓';
                                        symbol.style.color = 'green'
                                }
                }
                })}
  
 );
        


